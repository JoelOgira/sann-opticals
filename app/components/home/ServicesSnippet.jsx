import { BsSunglasses } from 'react-icons/bs'

const ServicesSnippet = () => {
    return (
        <section className="bg-white w-full">
            <div className="grid grid-cols-1 [&>div]:px-4 text-center [&>div>p]:max-w-xs sm:grid-cols-2 lg:grid-cols-4 lg:[&>div]:px-12">
                <div className="flex flex-col space-y-3 items-center justify-center py-16 border md:py-28">
                    <h3 className="text-lightBlue text-2xl p-2 rounded-full bg-brightRed"><BsSunglasses /></h3>
                    <h4 className='text-lg font-semibold'>Computerized Eye Examination</h4>
                    <p>We offer quality sunglasses at unbeatable prices. Visit our store near you today to get yours</p>
                </div>
                <div className="flex flex-col space-y-3 items-center justify-center py-16 border md:py-28">
                    <h3 className="text-lightBlue text-2xl p-2 rounded-full bg-brightRed"><BsSunglasses /></h3>
                    <h4 className='text-lg font-semibold'>Prescription of Glasses</h4>
                    <p>We offer quality sunglasses at unbeatable prices. Visit our store near you today to get yours</p>
                </div>
                <div className="flex flex-col space-y-3 items-center justify-center py-16 border md:py-28">
                    <h3 className="text-lightBlue text-2xl p-2 rounded-full bg-brightRed"><BsSunglasses /></h3>
                    <h4 className='text-lg font-semibold'>Low Vision Aid</h4>
                    <p>We offer quality sunglasses at unbeatable prices. Visit our store near you today to get yours</p>
                </div>
                <div className="flex flex-col space-y-3 items-center justify-center py-16 border md:py-28">
                    <h3 className="text-lightBlue text-2xl p-2 rounded-full bg-brightRed"><BsSunglasses /></h3>
                    <h4 className='text-lg font-semibold'>Designer Sunglasses</h4>
                    <p>We offer quality sunglasses at unbeatable prices. Visit our store near you today to get yours</p>
                </div>
            </div>
        </section>
    )
}

export default ServicesSnippet