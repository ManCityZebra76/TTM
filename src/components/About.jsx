import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0c0c0c] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4'>
                <div className='text-center pb-8'>
                    <p className='text-4xl sm:text-5xl font-bold inline border-b-4 border-[#ffde02]'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full px-4 text-center'>
                <div>
                    <p className='text-center text-4xl font-bold text-gray-500'>Welcome to Tireless Talent Management</p>
                </div>
            
                <div>
                    <p className='text-center pt-5 justify-center'>
                        At Tireless Talent Management, we're more than just a talent agency – we're your dedicated partners
                        in the pursuit of excellence. From personalized career consulting to expertly crafted highlight videos and 
                        comprehensive networking opportunities, we provide the tools and support you need to succeed in the competitive world of professional sports.
                        Our services are designed to empower athletes at every stage of their journey, helping them navigate challenges, 
                        seize opportunities, and maximize their potential. Whether you're a rising star looking to break into the industry or a 
                        seasoned professional seeking to elevate your career to new heights, we're here to help you reach your goals.
                        Join us on the path to success. Explore our services, connect with our team, and take the first step towards achieving 
                        your dreams with Tireless Talent Management.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About