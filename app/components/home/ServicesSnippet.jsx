import { BsSunglasses } from 'react-icons/bs'
import SingleService from './SingleService'
import ButtonInternal from '../ButtonInternal'

const ServicesSnippet = () => {
    return (
        <section className="bg-lightGrey px-4 py-24 w-full lg:px-44 xl:px-72">
            <div className="flex flex-col space-y-12">

                <div className="flex flex-col space-y-4 text-center">
                    <h2 className='text-primary text-lg font-semibold'>All our services are geared towards a single objective:</h2>
                    <h3 className='font-bold text-4xl md:text-5xl tracking-wider'>Helping people see clearly</h3>
                </div>

                <div className="grid grid-cols-1 text-center gap-5 [&>div>p]:max-w-xs sm:grid-cols-2">

                    <SingleService icon={< BsSunglasses />} title={'Computerized eye Examination'} description={'We offer quality sunglasses at unbeatable prices. Visit our store near you today to get yours'} />

                    <SingleService icon={< BsSunglasses />} title={'Prescription of Glasses'} description={'We offer quality sunglasses at unbeatable prices. Visit our store near you today to get yours'} />

                    <SingleService icon={< BsSunglasses />} title={'Low Vision Aid'} description={'We offer quality sunglasses at unbeatable prices. Visit our store near you today to get yours'} />

                    <SingleService icon={< BsSunglasses />} title={'Designer Sunglasses'} description={'We offer quality sunglasses at unbeatable prices. Visit our store near you today to get yours'} />

                </div>

                <ButtonInternal href={'/services'} title={'More Services'} />

            </div>
        </section>
    )
}

export default ServicesSnippet