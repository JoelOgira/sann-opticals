"use client"
/* eslint-disable react/no-unescaped-entities */

import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'

export default function EmblaCarousel() {

    const autoplayOptions = {
        delay: 6000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
    }

    const [ emblaRef ] = useEmblaCarousel({ loop: true }, [ AutoPlay(autoplayOptions) ])

    return (
        <main className='flex flex-col sm:flex-row sm:space-x-3'>

            <div className=" grid items-center px-4 sm:w-1/2 lg:pl-12">
                <div className="py-16">
                    <h1 className="text-4xl tracking-wide pb-6 font-semibold sm:max-w-sm lg:text-6xl">
                        <span>Sann</span>
                        <span className="text-primary px-3">Opticals</span>
                        <span>Limited</span>
                    </h1>
                    <p className="text-gray-800 leading-8 sm:max-w-sm lg:max-w-full">
                        The best and most affordable optical shop in Mombasa.  Your premier destination for top-quality eyewear. Experience unparalleled service, an extensive range of eyeglasses, and expert vision care.
                    </p>
                </div>
            </div>

            <div className="overflow-hidden h-[358px] sm:h-[338px] sm:w-1/2 md:h-[478px] lg:h-[506px]" ref={emblaRef}>
                <div className="flex">

                    <div className="flex-shrink-0 flex-grow-0 w-full h-[358px] sm:h-[338px] md:h-[478px] lg:h-[506px]">
                        <div className="slider1">

                        </div>
                    </div>

                    <div className="flex-shrink-0 flex-grow-0 w-full h-[358px] sm:h-[338px] md:h-[478px] lg:h-[506px]">
                        <div className="slider2">

                        </div>
                    </div>

                    <div className="flex-shrink-0 flex-grow-0 w-full h-[358px] sm:h-[338px] md:h-[478px] lg:h-[506px]">
                        <div className="slider3">

                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
