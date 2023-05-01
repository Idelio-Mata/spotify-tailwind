import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export function Main(){
  return(
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
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFoAWgMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAEBQYDBwIBAP/EADkQAAIBAgQEAwQJAwUBAAAAAAECAwQRAAUSIQYTMUEiUWEyQnGhBxQjgbHB0eHwFZHxJDNSYnIW/8QAGQEAAgMBAAAAAAAAAAAAAAAAAgMAAQQF/8QAIxEAAgIBBAEFAQAAAAAAAAAAAAECEQMEITFBURITYZHRBf/aAAwDAQACEQMRAD8AaU1alW0bBHSnax8eq7Aenb4emDZzRLI0iLzWQWvuobyvsCf7/LA9Ll6QRpHEihI9lC7jB8NNra8gDgjoO+D2FJMEjMMsxVLxxsjBl3sB5DxWxnmlfR5Rl1TWT0WuOEar76n3Av7VthhxSUkKyGR47jTtbp/NsfMwyilzOkkhrldoJV0sgYi4v2I3BwLZdCCh47pqmpaioaF6gJGzIRLEqtoYjUCTuDb574Fk+knJ4nKNlMizSxkoGZCCRIUIve1/CSLbEDz2xRpwjlwzM5jHzo5WLM2mZgrXJJBW9juSRj0nA2US0S0T0oaAFSmpjqSzagA17gAk2A2sbdMUETOccXZdl2bClqaRtcSrrmiPLWMllHtX6gMCfRhgzh3N8n4qeoeOlq+VCt/tZx4wS4Xa9wfAevnh7U8FZLM0SVdIJkR3a0jMdZZw7at/FdlXr226YKlyelWuqKukpI4p5wqymM6QdJYjYd/E2/e+JZKRn/TIKXlvR0shZlBCeP2fU3wwo8qSNklMFyRcqNVvxOPSUM0kAEbvewFmY/fY49pHPCwQkILgXBJviEoYGNKaEWh0rf2QcZFpSSVpFsenj/bGkvMeLxWuO9sYincgG6/epxCyHyCoIZIahrN7kn5E/nin+rwQm8/g1NbVbp3OJzLY0j8LaWANh8D2/n6W14ggqs2hyrLKereBjVNecM4YLynsLqy3N7Wvt0uD0wTKKmNIQGAcEOmrp23xoyQhAGbZQfzv+BxCVEOeyoZKRawGDKGVo3LLzWswOk3Nj4rg7ElQL2OPtTR51yqkUq5ksjLOXaolmdGN57ctS/g20em42uDgSy/iijUx3Is48PruB+Yxs7xwqWBsV2/LEFVSZ1VyZNT0n1ymkpoXR5nVijSc6mIJF912cb9r9L4XyRZ5VvUvKM1heSNCFimmKxnnAlTpkUHa4utjboe2IWdHqHWJEmlPgceHtc2vgJpIbIxdRq/ucKMxy2vzPhzgykdqqCQvF9cbnyCRLUz3u4IJOq25PW17i+JRsozc1VAUFciRyxSTCaaY6vtF1afHsLHYHbrtiFHUYquGG0cxAYLffy3/AEOMGrqczP4iw6+o7fkcSnH1JWyZmwoFrDfLysZhkkVA2movqCsATfRYncemJ6qoczpFmSSorwRS1gZY55TZlqisZBLajdHvYtvZSdxfERDp81fEI1hp2s7rcuRsn74iZ8wpxNIGsSGNzpJvv56h+GPuWVZXhmhidXE3KIYuSWvc9Sd7/H9MLCYwSGWW/ff9sMiimx61FIrA6dVv+PT0wTSMol0ymzwm6FgRvb98b5fS1VNqopRzFQl4pgLWUnof58MB5jFyarlTMdZAYb9RgGwkr4KqizChEOmWSIG2kkn5HHqfNKDWYopYmlNwRqG38viOqI6B4xHIxPmdW/448ZdRZes2nWwRdy2s7DC3JDlhlVlDnGdUuRw0FYqwyUktasFTKW/2lYGzfcQMZz8d8GU1bJRzZzRpJEVUkPdbkkWuNtiN/Lr0xx/Oc1PGmc1NGtZUUvDdNIsaU6sBz3W/iPb177WwbFwnwcFAenJPmah/1wmeohCVNmzD/Nz58SnCO3nydZ/+noarP6LLMrmpaqn+qPVS1EUgdY1HhWxBtuSflggZnQQz8uaWEC3gctsd/wDGOIV1HFwq0uZ8H1slPUCMiSBjzElj6kb332B+7F1T1GUZ7lVLmVJI+iZAWQyXaNu6m3e98HDLGatCdRpJ4pqEo06+y2rcxoBf/UQtL0G97X/zhVVRwSBiZo2Z7m41Hqbnt54TU9PRx7Rsb9iXOCo4g0gjiY6j8h54apIzSxyXIPJR6ZCFuyr7KgHxfLAZhgv46mze8AhO/wAbYb1lLUXSCn3klBBmPRV72/v+mNlyGiCgSFne3ibmEXPnhliqCMhr5qzh6KvqU0zTWIj0kaRbpvv6/fgaVxUNZwp6m1twfMfz9zHzGlST6pTqHghWzMp2U9LH+fPCKvmjMumnJA99ul/T4YBoZBozeTTIy2hcD3ip3x6qsw+oZNmdYkULSU9JK6WXqQpt88CEjf7Tb44IoOTJMYZSkkbqVZZPEpB8x3wtp2arj6Wc7+jmpoMupKOashSQCZ5GDrqHdRcdwCFOKELJnayZrXQ0Imo1RqkUQaOOf7XfSDvfRtfzxLU9GvD2cz5PnMbt9UZ3jEJA58ZVtBFzsNWkn0wwSkJ5ITNUUTaVYRVH2aSXB0gkbCx1aulwRe43w5YTtpds7mjy4fbhJtppV3Xzx3+2OMwzmnzOihTNKagFYhkXVQxNGnLOyqb7k/hjL6JJpJuH8wimZJEpqgCIOvshhc7+Vxe3qfPCTOqugoIBUQzGZ4tYQ2NprhSmxAYMDrDDp3vix4VoJMg4So6CrbRUyMaiVNW6lgNj62w/CpbtmDXPGpQjG6V88jtNLDTpiBvcFV6YaxcqNQoK7jcge0PT0/nxRwyhQSJNj31XxtTVyx1QSSRmi6A/8caEmc/I49D+NxcgC407emPOtjvpP9sLnzSKmqI0kFon2Mp6Dpb+dsM7J2W47G3X54ZRlZL0LqlNykI0Btyesjef6YKSnSbUWGhEtfCGikaWW+2xux90YoMtjkqJ5I4mtGh8TWuBbsd+uDYNhVHw6KxS5n5ca7EacExcNwUsqkzXiJ2YAXHxxs9XUI8cFMsXIA8TM25+62D4pQIuXKwe432wth2xdm/CHD+d0ZhzNYxJe6VUREcqG1rh+vbobjHOc2+i+emro4cu4lWaGQXUyUyMw36M1/Vd/U+WOlvkmWVZtPFrDf8AcjHO8+yT+lZ3WxrSO4dv9Eqq7lhba1uu/XCNRNY43VmrSKUptXRT5D9GfD2WaKiqqDm1enSWpYFE/wDMY2HTvfDes4cjrqnVHNc+85HfGGWcP5fSUVKZYSlWYlM4WQkB7DVb774eRTRQQqkQIUdB3OHKq2Mzbvdk7X8OfUvFHMWj6G4wrkgSFQwuxO9ycWdTVrpZHW/usCet8SWbUzUpLowaFuhYgfccHEBsWTT3dw6ho2G6/DoR6jHxFqwiiLMAEA8I5hG3bbAdfMYrteysdO57+WPHLkO9zvhgIzoYJ5EekoTpXR45zuFPn8fIdsG0WZVOV0Ah5UXLiNlKS3JJ2ub2N8fMsZv6RQnUbuSXN/aPr54iuO5pUjdUldVMi3AYgdRgOSm6OjJLy4o3QmRHAIANzhjE5YDmDr0sdziE4VlkemOuR2so6tfti4pgDEWIBKjY+XTAstMaQUwBTW9r9cIGz2qjYg6RG1h/vxjz/TFZl4BhW4B6Y0lij5J+zT3vdGKDEFFHJW5bFUpJGZGBuA4YdSOo27Y3ghdYGEvtarAYYwKqwMAABa9gMLYWb+oSLqNtZ2v6YhBXndZT0Ta5X5S32vhJUcUUUgkpFjMyOtnLKQCPS/fH7iTeolB6a3wilAEwsAOmCSFt7hlVSmPSWAlo5PYYnpbsT5+Rwn5iDZZY7DpeQYt8pVZMhcSKHGhtmF/dOEixxlQSik28sEmUf//Z" 
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
    
  )
}