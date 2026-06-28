import { PieChart, Pie, Cell } from "recharts"

interface Props{
  weatherData: any
} 

function UvChart({ weatherData }: Props) {

  const getUVLevel = (uv: number) => {
    if (uv <= 2) return { label: "Low" }
    if (uv <= 5) return { label: "Moderate"}
    if (uv <= 7) return { label: "High"}
    if (uv <= 10) return { label: "Very High"}
    return { label: "Extreme" }
  }

  // These now run after weatherData is set
  const uv = weatherData?.current?.uv ?? 0
  const maxUV = 11
  const percentage = Math.min((uv / maxUV) * 100, 100)
  const { label } = getUVLevel(uv)

  const data = [
    { value: percentage },
    { value: 100 - percentage },
  ]


  return (
    <div className="bg-white h-[350px] p-6 px-19  rounded-xl shadow-2xl font-sora">
      <div className=" h-full rounded-xl  flex flex-col items-center  text-[#0000FF] p-4">
        <div className="w-full flex justify-center">
                  <p className="text-lg  mt-1 text-[#0000FF] ">UV Index</p>

        </div>

        <PieChart width={150} height={150} className="flex justify-center">
          <Pie
            data={data}
            cx={70}
            cy={70}
            innerRadius={40}
            outerRadius={70}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            <Cell fill="#0000FF" />
            <Cell fill="#FFFFFF" />

          </Pie>
        </PieChart> 

        <div className=" flex flex-col items-center">
          <span className="text-2xl ">{weatherData?.current?.uv}</span>
        </div>
      <div className="w-full flex flex-col items-center ">

      <p className="text-md text-[#0000FF] " >{label}</p>
      </div>
      </div>
    </div>
  )
}

export default UvChart