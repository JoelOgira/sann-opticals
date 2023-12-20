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
        <section className='flex flex-col-reverse md:flex-row md:space-x-3'>

            <div className=" grid items-center px-4 md:w-1/2 lg:pl-12">
                <div className="py-16">
                    <h1 className="text-4xl pb-6 font-bold lg:text-6xl">
                        <span>Sann</span>
                        <span className="text-primary px-3">Opticals</span>
                        <span>Limited</span>
                    </h1>
                    <h2 className='text-2xl py-6 font-semibold text-gray-900'>The best and most affordable optical shop in Mombasa and it's environs</h2>
                    <p className="text-gray-800 leading-8 md:max-w-md lg:max-w-full">
                        Your premier destination for top-quality eyewear. Experience unparalleled service, an extensive range of eyeglasses, and expert vision care.
                    </p>
                </div>
            </div>

            <div className="h-[358px] sm:h-[338px] md:w-1/2 md:h-[470px] lg:h-[506px]">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">

                        <div className="flex-shrink-0 flex-grow-0 w-full h-[358px] sm:h-[338px] md:h-[470px] lg:h-[506px]">
                            <div className="slider1">

                            </div>
                        </div>

                        <div className="flex-shrink-0 flex-grow-0 w-full h-[358px] sm:h-[338px] md:h-[470px] lg:h-[506px]">
                            <div className="slider2">

                            </div>
                        </div>

                        <div className="flex-shrink-0 flex-grow-0 w-full h-[358px] sm:h-[338px] md:h-[470px] lg:h-[506px]">
                            <div className="slider3">

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}
