// import { useState } from "react"
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts"


interface Props{
  currentData: any,
  forecast: any[]

} 

function WeatherRadar({ currentData, forecast }: Props) {
//   const [loading, setLoading] = useState(true)


  // Computed after state is set
  const radarData = [
    { metric: "Humidity", value: currentData?.humidity ?? 0 },
    { metric: "Cloud", value: currentData?.cloud ?? 0 },
    { metric: "Rain %", value: forecast[0]?.day?.daily_chance_of_rain ?? 0 },
    { metric: "UV", value: (currentData?.uv ?? 0) * 9 },
    { metric: "Wind", value: Math.min((currentData?.wind_kph ?? 0), 100) },
    { metric: "Visibility", value: Math.min((currentData?.vis_km ?? 0) * 10, 100) },
  ]
  

  return (
    <div className="bg-white h-[350px] p-6 rounded-xl shadow-2xl font-sora">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={radarData}>
          <PolarGrid stroke="#0000FF" />
          <PolarAngleAxis
            dataKey="metric"
            tick={{ fill: "#0000FF", fontSize: 11 }}
          />
          <Radar
            dataKey="value"
            stroke="#0000FF"
            fill="#0000FF"
            fillOpacity={0.2}
          />
          
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default WeatherRadar