import { HomeIcon, Search, Library, PlusSquare, Star } from "lucide-react";

export function Sidebar(){
  return(
    <aside className="w-72 bg-zinc-950 p-6">
    <div className='flex items-center gap-2'>
      <div className='w-3 h-3 bg-red-500 rounded-full'></div>
      <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
      <div className='w-3 h-3 bg-green-500 rounded-full'></div>
    </div>
   
    <nav className='space-y-4 mt-6'>
      <a href="" className='flex items-center gap-3 text-zinc-200' >
        <HomeIcon/> Home 
      </a>
      <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
        <Search/> Search
      </a>
      <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
        <Library/> Your librarie
      </a>
    </nav>

    <nav className='space-y-0 mt-6 pt-10 border-t border-zinc-800'>
      <a href="" className='flex items-center gap-3 -mt-4  text-zinc-200' >
        <PlusSquare/> Create playlist
      </a>

      <nav className='p-6 flex flex-col gap-3'>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Jazz</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Azagaia</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hip hop</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Amapiano</a>
      </nav>

      <a href="" className='flex items-center gap-3 text-zinc-200' >
        <Star/> My favorites songs
      </a>
    </nav>
  </aside>
    
  )
}