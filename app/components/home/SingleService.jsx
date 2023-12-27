
const SingleService = ({ icon, title, description }) => {
    return (
        <div className="bg-white rounded px-5 flex flex-col space-y-3 items-center justify-center text-justify py-16 border md:py-28">
            <h3 className="text-lightBlue text-2xl p-2 rounded-full bg-brightRed">{icon}</h3>
            <h4 className='text-lg font-semibold'>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default SingleService