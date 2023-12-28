
const SingleService = ({ icon, title, description }) => {
    return (
        <div className="bg-white rounded px-10 flex flex-col space-y-6 items-center justify-center text-center py-10 shadow-md md:py-20">
            <h3 className="text-lightBlue text-4xl p-2 rounded-full bg-brightRed">{icon}</h3>
            <h4 className='text-lg font-semibold'>{title}</h4>
            <p className="text-gray-800">{description}</p>
        </div>
    )
}

export default SingleService