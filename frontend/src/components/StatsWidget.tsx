

interface Props{
  weatherData: any
  population: any
} 


function StatsWidget({ weatherData, population }: Props) {

  const stats = [
    { label: "Population", value: population },
    { label: "Local Time", value: weatherData?.location?.localtime ?? "—" },
    { label: "Country", value: weatherData?.location?.country ?? "—" },
    {
      label: "Coordinates",
      value: weatherData
        ? `${weatherData.location.lat}°N, ${weatherData.location.lon}°E`
        : "—",
    },
  ]

  return (
    <div className='bg-white h-[350px] p-6  rounded-xl shadow-2xl font-sora'>
      <div className='h-full rounded-xl text-[#0000FF] p-4 flex flex-col gap-3'>
        <p className='text-xl mb-2'>City Stats</p>

        {stats.map((stat) => (
          <div key={stat.label} className='w-full flex justify-between border-b border-[#0000FF] pb-2'>
            <p className='text-sm pr-5'>{stat.label}</p>
            <p className='text-sm '>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsWidget