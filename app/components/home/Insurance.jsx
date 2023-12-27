import Image from 'next/image'
import { acceptedInsurance } from './imports'

const Insurance = () => {
    return (
        <section className="w-full px-4 py-20 lg:px-12">
            <div className="flex flex-col space-y-10 md:flex-row md:space-x-14 md:space-y-0">
                <div className="flex flex-col space-y-5 justify-center items-center text-center w-full [&>p]:text-justify md:justify-start md:items-start md:text-left md:w-1/3">
                    <h2 className="text-lightRed">INSURANCE</h2>
                    <h3 className="font-bold text-3xl max-w-md md:text-4xl md:max-w-xl tracking-wider">Here are Our Insurance Partners</h3>
                    <p>We proudly accept a wide range of insurance covers to provide you with seamless and hassle-free services.</p>
                    <p> <span className="font-semibold underline text-lg">Note:</span> CIC Group Insurance cover is accepted for the civil servants in the <span className="text-lightRed">National Police Service(NPS) </span> and those in the <span className="text-lightRed">Kenya Prisons Service</span></p>
                </div>

                <div className="grid grid-cols-2 gap-5 items-center sm:grid-cols-3 md:w-2/3">
                    {(acceptedInsurance || []).map(insurance => (
                        <div key={insurance?.id} className="flex justify-center items-center">
                            <Image src={insurance?.img} alt={insurance?.alt} className='max-w-[150px]' placeholder='blur' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Insurance