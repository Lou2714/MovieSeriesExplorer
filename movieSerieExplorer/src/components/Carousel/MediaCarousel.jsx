import useEmblaCarousel from 'embla-carousel-react'
import PosterCard from '../PosterCard'
import { GrPrevious, GrNext } from "react-icons/gr";

import { useState, useEffect } from 'react'

const MediaCarousel = () =>{
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
    const [prevButtonDisabled, setPrevButtonDisabled] = useState(true)
    const [nextButtonDisabled, setNextButtonDisabled] = useState(true)

    const goToPrev = () => emblaApi.scrollPrev()
    const goToNext = () => emblaApi.scrollNext()

    const toggleButtonsDisabled = (emblaApi) => {
        setPrevButtonDisabled(!emblaApi.canScrollPrev())
        setNextButtonDisabled(!emblaApi.canScrollNext())
    }

    useEffect(() => {
        if (!emblaApi) return

        toggleButtonsDisabled(emblaApi)
        emblaApi.on('reinit', toggleButtonsDisabled)
        emblaApi.on('select', toggleButtonsDisabled)
    }, [emblaApi])

    return (
        <div className="embla relative">
            <div className="overflow-hidden px-3" ref={emblaRef}>
                <div className="flex touch-pan-x touch-pinch-zoom">
                    <div className="flex-initial basis-full">
                        <PosterCard />
                    </div>
                    <div className="flex-initial basis-full">
                        <PosterCard />
                    </div>
                    <div className="flex-initial basis-full">
                        <PosterCard />
                    </div>
                    <div className="flex-initial basis-full">
                        <PosterCard />
                    </div>
                    <div className="flex-initial basis-full">
                        <PosterCard />
                    </div>
                    <div className="flex-initial basis-full">
                        <PosterCard />
                    </div>
                    <div className="flex-initial basis-full">
                        <PosterCard />
                    </div>
                    <div className="flex-initial basis-full">
                        <PosterCard />
                    </div>
                    <div className="flex-initial basis-full">
                        <PosterCard />
                    </div>
                </div>
            </div>
            <button className={`embla__prev absolute inset-y-0 left-0 text-xl active:bg-Shark-800 active:opacity-50 
                hover:bg-Shark-800 hover:opacity-50 cursor-pointer px-1 ${prevButtonDisabled ? " text-Shark-700":"text-Wild-Sand-100"}`} 
                onClick={goToPrev} disabled={prevButtonDisabled}>
                <GrPrevious />
            </button>
            <button className={`embla__next absolute inset-y-0 right-0 text-xl active:bg-Shark-800 active:opacity-50 
                hover:bg-Shark-800 hover:opacity-50 cursor-pointer ${nextButtonDisabled ? "text-Shark-700":"text-Wild-Sand-100"}`} 
                onClick={goToNext} disabled={nextButtonDisabled}>
                <GrNext />
            </button>
            
        </div>
    )
}

export default MediaCarousel;