import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, PlusSquare, Star, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, ListMusic, ListMusicIcon, Laptop2, Laptop2Icon, Maximize2, Volume } from 'lucide-react'
export default function Home() {
  return (
  
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
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


        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft/>
            </button> 
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
          </div>
          
          
          <h1 className='font-semibold text-3xl mt-10'>Good afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="https://cdn2.albumoftheyear.org/200x/album/631029-melusine_2127.jpg" 
               width={104} height={104} alt="Cover of Mélusin album of Cécile McLorin Salvant" />
              <strong>Mélusin</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible"> 
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="https://cdns-images.dzcdn.net/images/cover/490b898131c795f1f8d2954ed6f267a7/140x140-000000-80-0-0.jpg"
              width={104} height={104} alt="" />
              <strong>Peacefull</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible"> 
                <Play/>
              </button>
            </a>
            <a href='#' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_CWwSBjVhKU4jApx-NLA_iRrAbUrkRnF4la5HAqprCQ&s"
              width={104} height={104} alt="Cover of Bad album of Michael Jackson" />
              <strong>Bad</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible"> 
                <Play/>
              </button>
            </a>
            <a href='#' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="data:image/jpeg;base64,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" 
              width={104} height={104} alt="Cover of Loud album of Rihanna" />
              <strong>Loud</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible"> 
                <Play/>
              </button>
            </a>
            <a href='#' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="data:image/jpeg;base64,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" 
              width={104} height={104} alt="Cover of Punchlines for Days 3 album of Hernâni" />
              <strong>Punchlines for Days 3</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible"> 
                <Play/>
              </button>
            </a>
            <a href='#' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oaB2oEydp1L5jfn1KGU2PKLWvO6JF29DKl1AcjNfqA&s"
              width={104} height={104} alt="Cover of Dangerous womanalbum of Arihana grande" />
              <strong>Dangerous Woman</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible"> 
                <Play/>
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-3xl mt-10'>Made for Idélio Mata</h2>
          <div className='grid grid-cols-6 gap-4 mt-4'>

            <a href='#' className='bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <img src="https://cdn2.albumoftheyear.org/200x/album/631029-melusine_2127.jpg"
              className='w-full' width={140} height={140} alt="Cover of Mélusin album of Cécile McLorin Salvant"/>
              <strong className='font-semibold'>Today´s Top Hits </strong>
              <span className='text-sm text-zinc-400'>Rema & Selena Gomez are on the top of the</span>
            </a>
            <a href='#' className='bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <img src="https://cdn2.albumoftheyear.org/200x/album/631029-melusine_2127.jpg"
              className='w-full' width={140} height={140} alt="Cover of Mélusin album of Cécile McLorin Salvant"/>
              <strong className='font-semibold'>Release Radar </strong>
              <span className='text-sm text-zinc-400' > Catch all the latest music from artistis yo..</span> 
            </a>
            <a href='#' className='bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <img src="https://cdn2.albumoftheyear.org/200x/album/631029-melusine_2127.jpg"
              className='w-full' width={140} height={140} alt="Cover of Mélusin album of Cécile McLorin Salvant"/>
              <strong className='font-semibold'>Rock Classics </strong>
              <span className='text-sm text-zinc-400' >Rock legends & epic songs that continue to..</span>
            </a>
            <a href='#' className='bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <img src="https://cdn2.albumoftheyear.org/200x/album/631029-melusine_2127.jpg"
              className='w-full' width={140} height={140} alt="Cover of Mélusin album of Cécile McLorin Salvant"/>
              <strong className='font-semibold'>Chill Hits</strong>
              <span className='text-sm text-zinc-400'>Kick back to the best new and recent chill</span>
            </a> 
            <a href='#' className='bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <img src="https://cdn2.albumoftheyear.org/200x/album/631029-melusine_2127.jpg"
              className='w-full' width={140} height={140} alt="Cover of Mélusin album of Cécile McLorin Salvant"/>
              <strong className='font-semibold'>RapCaviar</strong>
              <span className='text-sm text-zinc-400'>New music from Ice Spice, Jack Harlow an..</span>
            </a>
          </div>
        </main>

      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <img src='data:image/jpeg;base64,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' 
          width={68} height={68} alt="Cover of Iggy Azaela song" />
          <div className='flex flex-col'>
            <strong className='font-normal'>Fancy</strong>
            <span className='text-xs text-zinc-400'>Iggy Azaela feat Charli XCX </span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200'/>

            <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-white text-black"> 
              <Play size={20}/>
            </button>

            <SkipForward size={20} className='text-zinc-200'/>
            <Repeat size={20} className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400' >1:47</span>
            <div className='h-1 w-96 rounded-full bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded'></div>
            </div>
            <span className='text-xs text-zinc-400'>3:56</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20}/>
          <ListMusicIcon size={20}/>
          <Laptop2Icon size={20}/>
          <div className='flex  items-center gap-2'>
            <Volume size={20}/>
            <div className='h-1 w-24 rounded-full bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded'></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
    
      </footer>

    </div>

  )
}
