import { React } from 'react'
import bg from '../Images/bg.svg'
import freepikIcon from '../Images/freepik.svg'

const NavItems = ({ text }) => {
  return (
    <a href='/#' className='w-fit h-fit xl:px-2.5 py-px lg:px-2 hover:bg-[#3E2E8F] hover:text-white hover:rounded-full focus:bg-[#3E2E8F] focus:text-white focus:rounded-full'>
      {text}
    </a>
  )
}

const SocialMediaIcons = ({path}) => {
  return (
    <a href='/#'>
      <svg className='xl:w-6 xl:h-6 lg:w-5 lg:h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {path}
      </svg>
    </a>
  )
}

const LandingPage = () => {
  const socialMediaIcons = [
    <path fill='#3E2E8F' d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>,
    <path fill='#3E2E8F' d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>,
    <path fill='#3E2E8F' d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  ]

  return (
    <section className='w-screen h-screen overflow-hidden relative' >
      <img src={bg} alt='background' className={`h-full w-auto absolute top-0 right-0 -z-10`}/>
      <div className='w-9/10 xl:h-4/5 lg:h-3/4 flex flex-col mx-auto mt-10 justify-between font-montserrat'>
        <div className='text-[#3E2E8F] w-full flex justify-between lg:text-sm xl:text-base'>
          <div className='flex xl:gap-x-4 items-center lg:gap-x-3 '>
            <svg className='xl:w-10 xl:h-10 lg:w-9 lg:h-9 inline-block' fill='#3E2E8F' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.43 15.73">
              <path d="M12.38,0c-2.44-.33-3,2.33-5.17,2.33S4.49-.3,2.05,0-.4,4.58.72,8.13,2.14,16.28,4,15.68c1-.33,1.8-4.33,2.2-5.44a1,1,0,0,1,2,0c.4,1.11,1.16,5.11,2.2,5.44,1.87.6,2.16-4,3.29-7.55S14.83.36,12.38,0Z"/>
            </svg>
            <p className='font-light inline-block'>DENTAL<span className='font-semibold '>CARE</span></p>
          </div>
          <div className='flex xl:gap-x-2 lg:gap-x-1.5 items-center'>
            <NavItems text={'HOME'}/>
            <NavItems text={'SERVICES'}/>
            <NavItems text={'ABOUT'}/>
            <NavItems text={'CONTACT US'}/>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='font-medium xl:text-4xl lg:text-3xl text-[#3E2E8F]'>DENTAL <br/> <span className='text-[#477BE9] text-6xl lg:text-5xl font-bold'>CLINIC</span></h1>
          <p className='w-1/3 xl:text-base lg:text-sm leading-5 text-[#3E2E8F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odit fuga molestiae quos! Accusamus et sit optio necessitatibus debitis ducimus ullam sunt laboriosam, eum est, placeat harum doloribus veritatis.</p>
          <button className='w-fit h-fit xl:px-6 xl:py-1.5 xl:text-base lg:px-5 lg:py-1 lg:text-sm text-white bg-[#3E2E8F] rounded-full '>BOOK NOW</button>
        </div>
        <div className='flex flex-col xl:gap-y-2 lg:gap-y-1'>
          <div className='flex xl:gap-x-2 lg:gap-x-1.5'>
            {socialMediaIcons.map( (path, index) => <SocialMediaIcons key={index} path={path}/> )}
          </div>
          <p className='w-fit font-medium xl:text-lg lg:text-base text-[#3E2E8F]'>Designed by
            <a className='inline-block' href="http://www.freepik.com">
              <img className='xl:w-8 xl:h-8 lg:w-7 lg:h-7 inline-block xl:mx-1 lg:mx-0.5 -mt-1' src={freepikIcon} alt='freepik icon'/>
              <span className='font-semibold xl:text-lg lg:text-base'>freepik</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default LandingPage