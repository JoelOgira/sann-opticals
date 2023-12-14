import ContactForm from "./ContactForm"
import { IoShareSocialOutline } from 'react-icons/io5'
import Link from 'next/link'
import {MdFacebook } from 'react-icons/md'

const Message = () => {
    return (
        <div className="w-full bg-white flex flex-col space-y-5 sm:flex-row sm:space-x-3 sm:space-y-0">
            <div className="flex flex-col space-y-6 sm:py-24 px-4 sm:w-1/3 lg:px-12">
                <h2 className="text-primary flex items-center space-x-3 font-semibold pb-5">
                    <span> <IoShareSocialOutline className='text-lg' /> </span>
                    <span>SOCIAL LINKS</span>
                </h2>
                <h3 className='font-semibold text-3xl tracking-wide lg:tracking-wide'>
                    Connect with us on Social Media
                </h3>
                <p className="text-gray-600">Join the conversation! Connect with us on our social media pages for the latest updates, exclusive content, and to be part of our vibrant community. Engage with us and to share your thoughts, ask questions, and stay in the loop. We love hearing from you!</p>
                <Link className='flex items-center space-x-4 text-xl' href={'https://www.facebook.com/people/SANN-Opticals/100057699240184/'} target='_blank'> <span>Facebook</span> <span className="border border-primary rounded-full p-1"><MdFacebook className='text-xl text-primary' /></span> </Link>
            </div>

            <div className="px-4 py-12 sm:w-2/3 sm:py-24 lg:px-12">
                <ContactForm />
            </div>
        </div>
    )
}

export default Message