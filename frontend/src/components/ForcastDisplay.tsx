

interface Props{
  forecast: any
}

function ForecastColumn({ forecast }: Props) {

 
  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col gap-3 text-[#0000FF] font-sora w-full overflow-auto">
      <p className="text-xl mb-2">10-Day Forecast</p>

      {forecast.map((day: any) => (
        <div key={day.date} className="flex items-center justify-between border-b border-[#0000FF] pb-2">
          
          {/* Date */}
          <p className="text-xs w-22">
            {new Date(day.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
          </p>

          {/* Icon */}
          <img
            src={`https:${day.day.condition.icon}`}
            alt={day.day.condition.text}
            className="w-8 h-8"
          />

          {/* Rain chance */}
          <p className="text-xs ">{day.day.daily_chance_of_rain}% 🌧</p>

          {/* Min / Max */}
          <p className="text-sm ">
            {Math.round(day.day.mintemp_c)}° / {Math.round(day.day.maxtemp_c)}°
          </p>

        </div>
      ))}
    </div>
  )
}

export default ForecastColumn