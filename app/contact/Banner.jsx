const Banner = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row">
            <div className=" grid items-center px-4 sm:w-1/2 lg:pl-12">
                <div className="py-8">
                    <h1 className="text-5xl tracking-wide pb-6 font-semibold lg:text-6xl">
                        <span>Contact</span>
                        <span className="text-primary px-3">Us</span>
                    </h1>
                    <p className="text-gray-600 sm:max-w-[13rem] md:max-w-md lg:max-w-full">
                        Have questions or need assistance? Get in touch with us today! Our team is here to help. Contact us now and let us start the conversation.
                    </p>
                </div>
            </div>

            <div className="h-[350px] md:h-[400px] sm:w-1/2">
                <div className="contact-banner">

                </div>
            </div>
        </div>
    )
}

export default Banner