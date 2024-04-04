import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import homeBackground from '../assests/homeBackground.svg'

const Home = () => {
  return (
    <div name='home' className='w-screen h-screen bg-0% lg:bg-cover content-div' style={{backgroundImage: `url(${homeBackground})`}} >
        {/* Container */}
        <div className='max-w-[1000px] ml-10 px-8 flex flex-col justify-center sm:justify-normal h-full'>
            <h1 className='text-3xl sm:text-6xl max-w-[300px] sm:max-w-[700px] pt-[-20px] sm:pt-[150px] font-bold text-[#ccd6f6]'>Work hard in silence, your success will make the noise.</h1>
            {/* <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0]'></h2> */}
            <p className='text-[#8892b0] py-4 max-w-[300px] sm:max-w-[550px]'>Welcome to Tireless Talent Management, your partner in professional sports success. 
            From personalized career consulting to expert highlight videos and networking, we provide tailored support for athletes at every level. Join us and let's achieve greatness together.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-[#0c0c0c]'>
                  <Link to="players" smooth={true} duration={500}>View Players</Link>
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
        </div> 
    </div>
  )
}

export default Home