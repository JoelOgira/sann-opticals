"use client"

import { useState } from "react";

const Faq = () => {

    const [ isHidden, setIsHidden ] = useState(true)
    const [ isHidden1, setIsHidden1 ] = useState(true)
    const [ isHidden2, setIsHidden2 ] = useState(true)
    const [ isHidden3, setIsHidden3 ] = useState(true)

    return (
        <>
            <div className="flex flex-col space-y-16">
                <div className="flex flex-col space-y-8">
                    <div className="flex flex-col space-y-3">
                        <h3 className="text-lightRed font-bold font-poppins text-xl">General Query</h3>
                        <h2 className="font-bold text-3xl max-w-md md:text-4xl md:max-w-xl tracking-wider">Get all your answers here.</h2>
                    </div>
                    <p className="max-w-2xl md:max-w-xl">
                        Experience the difference as we dedicate ourselves to promoting eye health and enhancing vision in a friendly setting conducive to your well-being.
                    </p>
                </div>

                <div className="flex flex-col space-y-8">
                    <div className="flex flex-col space-y-4">
                        <div className="flex space-x-3 justify-start items-center border-b font-semibold">
                            <p className={`${isHidden ? 'text-black bg-white' : 'bg-lightRed text-white'} border-x p-3 border-t text-md md:text-lg`}>01.</p>
                            <p onClick={() => setIsHidden(!isHidden)} className={`${isHidden ? 'text-black' : 'text-lightRed'} cursor-pointer text-md md:text-lg`}>What is a comprehensive eye examination?</p>
                        </div>

                        <div className="pl-12">
                            <p className={`${isHidden ? 'hidden' : 'block'} text-[#666666] max-w-lg`}>A comprehensive or full eye examination evaluates more than just your vision- it also checks for common eye conditions like glaucoma, cataract, and diabetic retinopathy, along with the overall eye health and visual acuity.</p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <div className="flex space-x-3 justify-start items-center border-b font-semibold">
                            <p className={`${isHidden1 ? 'text-black bg-white' : 'bg-lightRed text-white'} border-x p-3 border-t text-md md:text-lg`}>02.</p>
                            <p onClick={() => setIsHidden1(!isHidden1)} className={`${isHidden1 ? 'text-black' : 'text-lightRed'} cursor-pointer text-md md:text-lg`}>How long does an eye exam take?</p>
                        </div>

                        <div className="pl-12">
                            <p className={`${isHidden1 ? 'hidden' : 'block'} text-[#666666] max-w-lg`}>An eye checkup typically takes between  30 minutes. The duration of your checkup depends on your symptoms, the tests conducted, your vision history, and any prevalent medical conditions. A routine eye checkup can sometimes be as quick as 15 minutes, while comprehensive checks can take over an hour. The appointment covers assessing the visual acuity, updating prescriptions, suggesting contacts or glasses, and looking for any underlying chronic health conditions.</p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <div className="flex space-x-3 justify-start items-center border-b font-semibold">
                            <p className={`${isHidden2 ? 'text-black bg-white' : 'bg-lightRed text-white'} border-x p-3 border-t text-md md:text-lg`}>03.</p>
                            <p onClick={() => setIsHidden2(!isHidden2)} className={`${isHidden2 ? 'text-black' : 'text-lightRed'} cursor-pointer text-md md:text-lg`}>Why do I need an eye exam before buying eyeglasses?</p>
                        </div>

                        <div className="pl-12">
                            <p className={`${isHidden2 ? 'hidden' : 'block'} text-[#666666] max-w-lg`}>An eye exam is essential to determine your current prescription and assess the overall health of your eyes. This information helps you choose eyeglasses that meet your specific vision needs and ensures that you protect your eyes effectively.</p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <div className="flex space-x-3 justify-start items-center border-b font-semibold">
                            <p className={`${isHidden3 ? 'text-black bg-white' : 'bg-lightRed text-white'} border-x p-3 border-t text-md md:text-lg`}>04.</p>
                            <p onClick={() => setIsHidden3(!isHidden3)} className={`${isHidden3 ? 'text-black' : 'text-lightRed'} cursor-pointer text-md md:text-lg`}>Does Sann Opticals accept Insurance?</p>
                        </div>

                        <div className="pl-12">
                            <p className={`${isHidden3 ? 'hidden' : 'block'} text-[#666666] max-w-lg`}>Yes. We accept a number of insurance covers including NHIF among others. The full list is provided in our insurance section.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq
