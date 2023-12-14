import Link from 'next/link'

const ButtonInternal = () => {
    return (
        <div className="flex justify-center md:items-start md:justify-start">
            <button
                className='bg-secondary
                px-6 py-2 rounded-full text-white hover:text-tertiary 
                hover:scale-105 hover:ease-in-out hover:duration-200'
            >
                <Link href={`${href}`}>
                    {title}
                </Link>
            </button>
        </div>
    )
}

export default ButtonInternal