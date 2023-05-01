import { Footer } from '@/components/footer/Footer'
import { Main } from '@/components/main/Main'
import { Sidebar } from '@/components/sidebar/Sidebar'
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, PlusSquare, Star, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, ListMusic, ListMusicIcon, Laptop2, Laptop2Icon, Maximize2, Volume } from 'lucide-react'
export default function Home() {
  return (
  
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar/>
        <Main/>
      </div>
      <Footer/>
    </div>

  )
}
