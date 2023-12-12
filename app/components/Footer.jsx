import { MdEmail, MdLocalPhone } from 'react-icons/md'

const Footer = () => {

  const thisYear = new Date().getFullYear()

  return (
    <footer className="top-full sticky">
      <div className="flex flex-col lg:flex-row text-white">
        
        <div className="bg-primary px-5 py-8 lg:w-1/4">
          <h4 className="text-xl font-bold pb-5">
            Sann Opticals limited
          </h4>
          <div className="flex flex-col space-y-5">
            <p className="flex space-x-3">
              <span  > <MdLocalPhone className='text-xl' /> </span>
              <span className="flex flex-col space-y-2">
                <span>Mombasa: +25471234567</span>
                <span>Kilifi: +25471234567</span>
                <span>Voi: +25471234567</span>
                <span>Mtito: +25471234567</span>
              </span>
            </p>
          </div>
        </div>
        
        <div className="bg-black lg:w-3/4">

        </div>
      
      </div>
    </footer>
  )
}

export default Footer