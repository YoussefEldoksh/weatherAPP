// import { useEffect, useState } from 'react';

interface Props{
  weather: any
}


function dataDisplay({ weather }: Props) {
  // const [loading, setLoading] = useState(true)
  

  const weatherStatements: Record<number, string> = {
  1000: "Not a cloud in sight — perfect weather to get outside and enjoy the day.",
  1003: "Mostly sunny with a few clouds drifting by, still a great day to be outdoors.",
  1006: "Clouds are rolling in and taking over, but it's still manageable out there.",
  1009: "A thick blanket of grey clouds overhead, don't expect much sunshine today.",
  1030: "A misty haze is hanging in the air, visibility is reduced so drive carefully.",
  1063: "Rain could show up at any moment, keep an umbrella within reach just in case.",
  1066: "Snow flurries are possible today, keep an eye on conditions if you're heading out.",
  1069: "Sleet may fall at times today, roads could get slippery so take it slow.",
  1072: "Freezing drizzle is in the air, surfaces may ice over so watch your step.",
  1087: "Thunderstorms are forming in the area, best to stay indoors until they pass.",
  1114: "Strong winds are whipping snow around, making it hard to see and bitterly cold.",
  1117: "A full-on blizzard is raging outside, stay indoors and off the roads entirely.",
  1135: "Dense fog is blanketing the area, visibility is very low so drive with extra caution.",
  1147: "Freezing fog has settled in, surfaces are extremely icy and dangerous to walk on.",
  1150: "A light drizzle is drifting through the air, barely enough to notice but still damp.",
  1153: "A steady gentle drizzle is falling, nothing heavy but you'll still feel it outside.",
  1168: "Freezing drizzle is coating surfaces with a thin layer of ice, roads are treacherous.",
  1171: "Heavy freezing drizzle is creating dangerous icy conditions everywhere you look.",
  1180: "Scattered light rain is popping up in patches, conditions could change quickly.",
  1183: "Light rain is falling at a steady pace, a jacket and umbrella are a smart choice.",
  1186: "Moderate rain is coming and going in waves, not the best day to be outside for long.",
  1189: "Moderate rain is falling consistently, you'll definitely want a proper rain jacket.",
  1192: "Heavy rain is hitting hard at times, flooding in low areas is a real possibility.",
  1195: "Heavy and persistent rain is pouring down, try to stay dry and indoors if you can.",
  1198: "Light freezing rain is falling and turning roads into ice rinks, drive very carefully.",
  1201: "Heavy freezing rain is creating extremely dangerous conditions on all surfaces outside.",
  1204: "Light sleet is mixed into the precipitation today, it's cold and unpleasant out there.",
  1207: "Moderate sleet is falling and accumulating, bundle up tightly before heading outside.",
  1210: "A light dusting of snow is falling, just enough to add a little magic to the scenery.",
  1213: "Light snow is coming down softly, it looks beautiful out there but dress warmly.",
  1216: "Moderate snow is falling steadily and starting to accumulate on roads and surfaces.",
  1219: "Moderate snowfall is making roads tricky, allow extra time if you need to travel.",
  1222: "Heavy snow is piling up fast, travel is strongly discouraged unless absolutely necessary.",
  1225: "Heavy snowfall is blanketing everything in sight, it's best to just stay home today.",
  1237: "Ice pellets are falling from the sky, they sting on contact and make surfaces slippery.",
  1240: "Light rain showers are moving through the area, they should pass fairly quickly.",
  1243: "Moderate rain showers are coming down, seek cover and wait for them to ease up.",
  1246: "Torrential rain is absolutely pouring down, going outside right now is a bad idea.",
  1249: "Light sleet showers are falling intermittently, stay aware of slippery surfaces.",
  1252: "Moderate sleet showers are making conditions messy and cold, take extra care.",
  1255: "Light snow showers are drifting through, pretty to look at but dress for the cold.",
  1258: "Heavy snow showers are coming down hard, wrap up well and limit time outside.",
  1261: "Light ice pellets are falling sporadically, surfaces may be slippery in spots.",
  1264: "Heavy ice pellets are pelting down, be very careful on any exposed surfaces outside.",
  1273: "Thunderstorms are rolling through with light rain in tow, stay sheltered until clear.",
  1276: "Severe thunderstorms with heavy rain are moving through, stay indoors and stay safe.",
  1279: "Thunderstorms mixed with light snow are creating unusual and hazardous conditions.",
  1282: "Thunderstorms paired with heavy snowfall are making for a wild and dangerous situation.",
}

const code = weather?.current?.condition?.code
const statement = weatherStatements[code] ?? "Conditions are unclear right now, stay safe out there."



  return (
    <div className='bg-white p-6   rounded-xl shadow-2xl font-sora'>
        <div className='bg-white rounded-xl text-[#0000FF] p-4'>
            <div className='w-full flex '>
                <p className='text-md'>{weather?.location?.name} · {weather?.location?.country}</p>
                    
            </div>
            <div className='w-full flex'>
                    <div className='text-xs '>{weather?.current?.condition?.text}</div>
            </div>
            
                <div className='w-full flex font-bold'>
                  <p className='text-4xl sm:text-6xl '>{weather?.current?.temp_c}°C</p>
            </div>

            <div className='w-full mt-2'>
                <p>
                    {statement}
                </p>
            </div>
        </div>
    </div>
  )
}

export default dataDisplay
