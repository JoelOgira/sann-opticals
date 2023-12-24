"use client"

import { useState } from "react";

const Faq = () => {

    const [ isHidden, setIsHidden ] = useState(true)
    const [ isHidden1, setIsHidden1 ] = useState(true)
    const [ isHidden2, setIsHidden2 ] = useState(true)

    return (
        <section className="faq-bg w-full">
            <div className="bg-white bg-opacity-80">
                <div className="px-4 py-24 md:container md:mx-auto lg:px-12">
                    <div className="flex flex-col space-y-16">
                        <div className="flex flex-col space-y-8">
                            <div className="flex flex-col space-y-3">
                                <h3 className="text-secondary font-bold font-poppins text-xl">General Query</h3>
                                <h2 className="font-bold text-3xl md:text-5xl md:max-w-xl">Get all your answers here.</h2>
                            </div>
                            <p className="max-w-lg md:max-w-md">
                                Kojwach Medical Center focuses on providing our patients monitored safe, quality healthcare in a patient-friendly environment, which speeds up the recovery process.
                            </p>
                        </div>

                        <div className="flex flex-col space-y-8">
                            <div className="flex flex-col space-y-4">
                                <div className="flex space-x-3 justify-start items-center border-b font-semibold">
                                    <p className={`${isHidden ? 'text-black bg-white' : 'bg-tertiary text-white'} border-x p-3 border-t text-md md:text-lg`}>01.</p>
                                    <p onClick={() => setIsHidden(!isHidden)} className={`${isHidden ? 'text-black' : 'text-tertiary'} cursor-pointer text-md md:text-lg`}>Where is Kojwach Medical Center located?</p>
                                </div>

                                <div className="pl-12">
                                    <p className={`${isHidden ? 'hidden' : 'block'} text-[#666666] max-w-xs`}>KMC is located in Ringa Kojwach town; a town in Homa Bay County. Off Kisii-Kisumu Highway;</p>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <div className="flex space-x-3 justify-start items-center border-b font-semibold">
                                    <p className={`${isHidden1 ? 'text-black bg-white' : 'bg-tertiary text-white'} border-x p-3 border-t text-md md:text-lg`}>02.</p>
                                    <p onClick={() => setIsHidden1(!isHidden1)} className={`${isHidden1 ? 'text-black' : 'text-tertiary'} cursor-pointer text-md md:text-lg`}>Do I need to book an appointment with KMC?</p>
                                </div>

                                <div className="pl-12">
                                    <p className={`${isHidden1 ? 'hidden' : 'block'} text-[#666666] max-w-xs`}>Currently NO. But we are still working on streamlining appointment booking process to enhance efficiency in accessing our services..</p>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <div className="flex space-x-3 justify-start items-center border-b font-semibold">
                                    <p className={`${isHidden2 ? 'text-black bg-white' : 'bg-tertiary text-white'} border-x p-3 border-t text-md md:text-lg`}>03.</p>
                                    <p onClick={() => setIsHidden2(!isHidden2)} className={`${isHidden2 ? 'text-black' : 'text-tertiary'} cursor-pointer text-md md:text-lg`}>Does KMC accept NHIF card?</p>
                                </div>

                                <div className="pl-12">
                                    <p className={`${isHidden2 ? 'hidden' : 'block'} text-[#666666] max-w-xs`}>Yes. We accept NHIF cards among other insurance covers. The full list is posted above.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq