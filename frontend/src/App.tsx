// import SearchBar from "./components/SearchBar"
import DataDisplay from "./components/dataDisplay"
import CityStatements from "./components/citystatement"
import ChartDisplay from "./components/chartDisplay"
import UvChart from "./components/UvChart"
import StatsWidget from "./components/StatsWidget"
import ForcastDisplay from "./components/ForcastDisplay"
import WeatherRadar from "./components/RadarChart"
import Navbar from "./components/navbar"
import { ArrowUp } from "lucide-react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { useEffect, useState } from "react"

function App() {
  const [weatherData, setWeatherData] = useState<any>(null)
  const [forecastData, setForecastData] = useState<any[]>([])
  const [population, setPopulation] = useState<string>("—")
  const [cityInfo, setCityInfo] = useState<any>(null)
  const [query, setQuery] = useState("London")
  const [error, setError] = useState<string | null>(null)
  // const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`) // Debugging line
          try {
            const res = await fetch(
              `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${latitude},${longitude}`
            )
            const data = await res.json()
            setQuery(data.location.name) // e.g. "Alexandria" 
          } catch (error) {
            console.error(error)
            setQuery("London")
          }
        },
        (error) => {
          console.error("Geolocation failed, using default:", error)
          setQuery("London")
        }
      )
    }
  }, [])
  useEffect(() => {
    const getData = async () => {
      // setLoading(true)
      setError(null)
      try {
        const forecastRes = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${query}&days=10`
        )
        const forecast = await forecastRes.json()

        // WeatherAPI returns error object if location not found
        if (forecast.error) {
          setError("Location not found. Try a city name, zip code, or coordinates.")
          // setLoading(false)
          return
        }

        setWeatherData(forecast)
        setForecastData(forecast.forecast.forecastday)

        const geoRes = await fetch(
          `https://secure.geonames.org/searchJSON?q=${forecast.location.name}&maxRows=1&username=${import.meta.env.VITE_GEONAMES_USERNAME}`
        )
        const geo = await geoRes.json()
        const pop = geo.geonames?.[0]?.population
        if (pop) {
          setPopulation(
            pop >= 1_000_000
              ? `${(pop / 1_000_000).toFixed(1)}M`
              : `${(pop / 1_000).toFixed(0)}K`
          )
        }

        const wikiRes = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${forecast.location.name}`
        )
        const wiki = await wikiRes.json()
        setCityInfo(wiki)

      } catch (err) {
        setError("Something went wrong. Please check your connection and try again.")
        console.error(err)
      } finally {
        // setLoading(false)
      }
    }
    getData()
  }, [query])
  const [inputValue, setInputValue] = useState("")

  return (
    <>
      <Navbar City={weatherData?.location?.name} Region={weatherData?.location?.region} />
      <div className="min-h-screen w-full flex flex-col gap-2 py-5 pb-50 ">

        {/* Top widgets row */}
        <div className="flex gap-2 px-5 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <DataDisplay weather={weatherData} />
          <UvChart weatherData={weatherData} />
          <StatsWidget weatherData={weatherData} population={population} />
          <WeatherRadar currentData={weatherData?.current} forecast={forecastData} />
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-5">

          {/* Shows second on mobile, first on desktop */}
          <div className="order-2 md:order-1">
            <ForcastDisplay forecast={forecastData} />
          </div>

          {/* Shows first on mobile, second on desktop */}
          <div className="flex flex-col gap-2 md:col-span-2 order-1 md:order-2">
            <CityStatements cityInfo={cityInfo} />
            <ChartDisplay forecast={forecastData.slice(0, 7)} />
          </div>

        </div>

      </div>

      {/* Search bar */}
      <div className="fixed inset-0 flex flex-col items-center justify-end p-5 pointer-events-none z-50">
        <div className="w-full md:w-2/3 h-[150px] bg-white flex flex-col items-center p-2 rounded-xl shadow-lg">
          {error && (
            <div className="w-full px-2 py-2 mb-1 text-sm text-red-500 bg-red-50 rounded-lg">
              {error}
            </div>
          )}
          <Input
            value={inputValue}
            className="w-full rounded-none bg-white h-[90px] focus-visible:ring-0 pointer-events-auto border-none placeholder:text-lg"
            placeholder="Give us Zip Code/Postal Code, GPS Coordinates, Landmarks, Town, City and we will do the rest"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={
              (e) => {
                if (e.key === "Enter") {
                  setQuery(inputValue);
                  setInputValue("");
                }
              }}
          />
          <div className="w-full flex justify-end px-2">
            <Button className="hover:bg-white bg-[#0000FF]"
              onClick={() => setQuery(inputValue)

              }
            >
              <ArrowUp size={20} />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App