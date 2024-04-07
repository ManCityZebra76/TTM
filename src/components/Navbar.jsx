import React, {useState} from 'react'
import {FaBars, FaX, FaLinkedin, FaInstagram} from 'react-icons/fa6'
import {HiOutlineEnvelope} from 'react-icons/hi2'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assests/greyTmtLogo.svg'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center bg-[#0c0c0c] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '150px', height: 'auto'}}/>
        </div>
        {/* menu */}
        <div className='flex-grow'></div>
        <div className='hidden md:flex'>
            <ul className='flex'>
                <li className='mx4'>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='mx4'>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='mx4'>
                    <Link to="players" smooth={true} duration={500}>
                        Players
                    </Link>
                </li>
                <li className='mx4'>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 absolute top-4 right-0 mt-4 mr-4'>
            {!nav ? <FaBars /> : <FaX />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
            </li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
            </li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="players" smooth={true} duration={500}>
                        Players
                    </Link>
            </li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
            </li>
        </ul>

        {/* Social icons */}
        <div className='fixed flex-col top-[35%] right-0'>
    <ul>
        <li className='w-[80px] lg:w-[160px] h-[40px] lg:h-60px flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://www.linkedin.com/in/john-seliskar/">
                <FaLinkedin size={30} className='ml-[-10px] lg:ml-0 duration-300'/> Linkedin 
            </a>
        </li>
        <li className='w-[80px] lg:w-[160px] h-[40px] lg:h-60px flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 instagram'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://www.instagram.com/tirelesstalentmanagement/">
               <FaInstagram size={30} className='ml-[-10px] lg:ml-0 duration-300'/> Instagram 
            </a>
        </li>
        <li className='w-[80px] lg:w-[160px] h-[40px] lg:h-60px flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-[#70c26f]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="mailto: johnw.seliskar@gmail.com">
                <HiOutlineEnvelope size={30} className='ml-[-10px] lg:ml-0 duration-300'/> Email 
            </a>
        </li>
        <li className='w-[80px] lg:w-[160px] h-[40px] lg:h-60px flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://publuu.com/flip-book/393551/891931">
               <BsFillPersonLinesFill size={30} className='ml-[-10px] lg:ml-0 duration-300'/> Resume 
            </a>
        </li>
    </ul>
        </div>

    </div>
  )
}

export default Navbar