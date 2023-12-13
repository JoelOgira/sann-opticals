import { MdEmail, MdLocalPhone, MdLocationOn, MdFacebook } from 'react-icons/md'
import Link from 'next/link'

const Footer = () => {

  const thisYear = new Date().getFullYear()

  return (
    <footer className="top-full sticky">
      <div className="flex flex-col lg:flex-row text-white">

        <div className="bg-primary px-4 py-10 lg:w-1/4 lg:py-20">
          <div className="md:container md:mx-auto md:w-5/6">
            <h4 className="text-2xl font-bold pb-6">
              Sann Opticals limited
            </h4>

            <div className="flex flex-col space-y-5">
              <p className="flex space-x-3">
                <span  > <MdLocalPhone className='text-xl' /> </span>
                <span className="flex flex-col space-y-2">
                  <span>Mombasa: +254721520641</span>
                  <span>Kilifi: +254705473800</span>
                  <span>Voi: +25471234567</span>
                  <span>Mtito: +25471234567</span>
                </span>
              </p>

              <p className="flex space-x-3 items-center">
                <span> <MdEmail className='text-xl' /> </span>
                <span>
                  info@sannopticals.co.ke
                </span>
              </p>

              <p className="flex space-x-3 items-center">
                <span> <MdLocationOn className='text-xl' /> </span>
                <span>
                  Box 42825 - 80100 Digo Rd, Mombasa
                </span>
              </p>
            </div>
          </div>

        </div>

        <div className="bg-black [&>div]:px-4  py-10 lg:w-3/4 lg:py-20 lg:px-36">
          <div className="md:container md:mx-auto md:w-5/6">
            <div className="grid grid-cols gap-y-10 pb-8 [&>div]:flex [&>div]:flex-col md:grid-cols-3 md:gap-y-0 lg:pb-12">
              <div className='flex flex-col space-y-3'>
                <Link className='text-xl font-semibold pb-4' href={'/'}>Our company</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/services'}>Services</Link>
                <Link href={'/contact'}>Contact</Link>
              </div>

              <div className='flex flex-col space-y-3'>
                <Link className='text-xl font-semibold pb-4' href={'/'}>Quick Links</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/services'}>Services</Link>
                <Link href={'/contact'}>Contact</Link>
              </div>

              <div className='flex flex-col space-y-3'>
                <p className='text-xl font-semibold pb-4' >Social Links</p>
                <p>Follow Us</p>
                <Link className='flex flex-row items-center space-x-4' href={'https://www.facebook.com/people/SANN-Opticals/100057699240184/'} target='_blank'> <span>Facebook</span> <span><MdFacebook className='text-xl text-primary' /></span> </Link>
              </div>
            </div>
          </div>

          <hr className='border-[0.2px] w-full' />

          <div className="top-full sticky pt-6 text-gray-400 text-center ">
            <p>Copyright &copy; Sann Opticals Limited {thisYear}</p>
          </div>

        </div>
      </div>


    </footer >
  )
}

export default Footer