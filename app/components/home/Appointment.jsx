import Faq from "./Faq"

const Appointment = () => {
    return (
        <section className='w-full bg-white'>
            <div className="flex flex-col-reverse px-4 md:flex-row lg:px-12">
                <div className=" grid items-center md:w-1/2 ">
                    <Faq />
                </div>

                <div className=" grid items-center md:w-1/2 ">

                </div>
            </div>
        </section>
    )
}

export default Appointment