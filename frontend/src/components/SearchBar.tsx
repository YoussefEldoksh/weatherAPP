import { Input } from "@/components/ui/input"
import { ArrowUp } from 'lucide-react';
import { Button } from "./ui/button";

function SearchBar() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-end p-5 pointer-events-none z-50">
      <div className='w-2/3 h-[150px] bg-white flex  flex-col items-center p-2 rounded-xl shadow-lg    '>
        <Input
          className="w-full rounded-none bg-white h-[90px]  focus-visible:ring-0 pointer-events-auto border-none placeholder:text-lg"
          placeholder='Give us Zip Code/Postal Code, GPS Coordinates, Landmarks, Town, City and we will do the rest'
          size={50}
        />

      <div className="w-full flex justify-end px-2">
          <Button className=" hover:bg-white bg-[#0000FF]">
            <ArrowUp  size={20}/>
        </Button>

      </div>
      </div>

    </div>
  )
}

export default SearchBar