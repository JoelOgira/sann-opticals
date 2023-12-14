
const ButtonSubmit = ({ type, title }) => {
    return (
        <div className="flex justify-center md:items-start md:justify-start">
            <button type={type} className='bg-secondary px-6 py-2 rounded text-white hover:text-tertiary hover:scale-105 hover:ease-in-out hover:duration-200'>
                {title}
            </button>
        </div>
    )
}

export default ButtonSubmit