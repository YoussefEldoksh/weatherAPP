
interface Props{
  cityInfo: any
}

function citystatement({cityInfo}: Props) {

  return (
    <>
        <div className='bg-white h-[350px] p-6 w-full rounded-xl shadow-2xl text-[#0000FF] font-sora'>
        <div>
          <p className='px-2 '>Overview</p>
        </div>
            <div className='bg-white h-full rounded-xl overflow-y-auto  md:text-xs p-2 '>
                <p>{cityInfo?.extract || "No information available"}</p>
            </div>
        </div>

    </>
  )
}

export default citystatement
