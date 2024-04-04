import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0c0c0c] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/wbrddkeb' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ffde02] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or send me an email - johnw.seliskar@gmail.com</p>
            </div>
            <input className='bg-[#F2EBE3] p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#F2EBE3]' type='text' placeholder='Email' name='email' />
            <textarea className='bg-[#F2EBE3] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#ffde02] hover:border-[#ffde02] hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact