import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

interface Props {
  forecast: any
}


function WeatherBarChart({ forecast }: Props) {


  const chartData = forecast.map((day: any) => ({
    date: new Date(day.date).toLocaleDateString("en-US", { weekday: "short" }),
    max: Math.round(day.day.maxtemp_c),
    min: Math.round(day.day.mintemp_c),
  }))


  return (

    <div className="bg-white rounded-xl shadow-2xl p-6   text-[#0000FF] font-sora">
      <p className="text-xl  mb-4">Weekly Temperature</p>

      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barGap={5}>
            <XAxis
              dataKey="date"
              tick={{ fill: "#0000FF", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              width={0}
              tick={{ fill: "#0000FF", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              unit="°"
            />
            <Tooltip
              contentStyle={{ borderRadius: "8px", border: "none", color: "#0000FF" }}
              formatter={(value: any) => `${value}°C`}
            />
            <Bar dataKey="max" fill="#0000FF" radius={[6, 6, 0, 0]} name="Max" />
            <Bar dataKey="min" fill="#c0c0ff" radius={[6, 6, 0, 0]} name="Min" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default WeatherBarChart