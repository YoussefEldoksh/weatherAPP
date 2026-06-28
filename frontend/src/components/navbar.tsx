
interface Props{
  City: String,
  Region: String,
}

function Navbar({City, Region}:Props) {
  return (
    <>
    <div className='w-full flex justify-center items-center py-5'>
      
      <div className='w-full flex justify-center font-boxing text-white text-lg md:text-4xl sm:text-3xl text-center'>{City}, {Region}</div>
    </div>
    </>
  )
}

export default Navbar
