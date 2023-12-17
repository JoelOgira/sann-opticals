import { TbLocationPin } from 'react-icons/tb'
import { MdEmail, MdLocalPhone } from 'react-icons/md'

const Locations = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-3">
      <div className="bg-[#F5F9F9] py-24 px-4 sm:w-2/3 lg:px-12">
        <h2 className="text-primary flex items-center space-x-3 font-semibold pb-5">
          <span> <TbLocationPin className='text-lg' /> </span>
          <span>OUR LOCATION</span>
        </h2>
        <h3 className='font-semibold text-4xl tracking-wide lg:tracking-[.12em]'>
          Sann Opticals Limited. Vision Made Better.
        </h3>

        <div className="grid grid-cols gap-3 pt-8 [&>div]:w-full sm:grid-cols-2">
          <div className="flex flex-col space-y-2 [&>h4]:font-semibold [&>h4]:font-lg [&>p]:text-gray-600 pb-8 border-b">
            <h4>01. Head Office in Mombasa</h4>
            <p>Box 42825 - 80100 Digo Rd, Mombasa</p>
            <p>+254721520641</p>
          </div>

          <div className="flex flex-col space-y-2 [&>h4]:font-semibold [&>h4]:font-lg [&>p]:text-gray-600 pb-8 [&>p]:max-w-xs border-b">
            <h4>02. Kilifi Office </h4>
            <p>Box 42825 - 80100, Mombasa</p>
            <p>Digo Road, Pension Towers 2nd floor</p>
            <p>+254721520641</p>
          </div>

          <div className="flex flex-col space-y-2 [&>h4]:font-semibold [&>h4]:font-lg [&>p]:text-gray-600 pb-8 border-b">
            <h4>03. Voi Office</h4>
            <p>Box 42825 - 80100 Digo Rd, Mombasa</p>
            <p>+254721520641</p>
          </div>

          <div className="flex flex-col space-y-2 [&>h4]:font-semibold [&>h4]:font-lg [&>p]:text-gray-600 pb-8 border-b">
            <h4>04. Mpeketoni Office</h4>
            <p>Box 42825 - 80100 Digo Rd, Mombasa</p>
            <p>+254721520641</p>
          </div>
        </div>
        <p className="flex space-x-3 items-center pt-5">
          <span> <MdEmail className='text-xl text-primary' /> </span>
          <span>
            sannopticals@gmail.com
          </span>
        </p>

      </div>

      <div className="bg-white px-4 py-12 sm:w-1/3 sm:py-24 lg:px-12">
        <p className="font-semibold font-xl pb-5">
          Opening Hours
        </p>
        <div className="flex flex-col space-y-3">
          <div className="flex justify-between items-center py-2 border-b">
            <p>Monday</p>
            <p>8 AM - 5:30 PM</p>
          </div>

          <div className="flex justify-between items-center py-2 border-b">
            <p>Tuesday</p>
            <p>8 AM - 5:30 PM</p>
          </div>

          <div className="flex justify-between items-center py-2 border-b">
            <p>Wednesday</p>
            <p>8 AM - 5:30 PM</p>
          </div>

          <div className="flex justify-between items-center py-2 border-b">
            <p>Thursday</p>
            <p>8 AM - 5:30 PM</p>
          </div>

          <div className="flex justify-between items-center py-2 border-b">
            <p>Friday</p>
            <p>8 AM - 5:30 PM</p>
          </div>

          <div className="flex justify-between items-center py-2 border-b">
            <p>Saturday</p>
            <p>8 AM - 3 PM</p>
          </div>
          <p className='text-red-400 pt-3'>Closed on Sunday and Public Holidays</p>
        </div>
      </div>
    </div>
  )
}

export default Locations