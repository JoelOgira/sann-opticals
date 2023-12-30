import Image from 'next/image'
import shoppingCart from '../../../public/Shopping_bag.svg'
import tools from '../../../public/tools.svg'
import insurance from '../../../public/insurance.svg'

const Jumbotron = () => {

    const tronData = [
        { id: 1, img: shoppingCart, description: "Shop for your glasses in any of our stores today and get amazing deals." },
        { id: 2, img: tools, description: "Have your existing glasses fitted in any of our stores." },
        { id: 3, img: insurance, description: "We accept a number of insurance covers for your glasses." }
    ]

    return (
        <div className='w-full flex items-center justify-between space-x-4 px-4 py-10 sm:space-x-0 lg:px-24'>
            {tronData.map(data => (
                <div key={data.id} className="flex flex-col">
                    <Image
                        src={data.img}
                        alt={data.img.toString()}
                    />
                    <p className='max-w-md text-sm text-gray-800' >{data.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Jumbotron