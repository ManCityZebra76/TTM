import React from 'react'
import dedeCover from '../assests/playerCovers/dedeCover.jpg'
import johnCover from '../assests/playerCovers/johnCover.jpg'
import gavinCover from '../assests/playerCovers/gavinCover.jpg'
import nateCover from '../assests/playerCovers/nateCover.jpg'

const Players = () => {
  return (
    <div name='players' className='w-full md:h-screen text-gray-300 bg-[#0c0c0c]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl sm:text-5xl text-left font-bold inline border-b-4 text-gray-300 border-[#ffde02]'>Players We Work With</p>
                <p className='py-6 font-bold text-center text-2xl text-[#8892b0]'>Check their details out here!</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8'>

            {/* Grid Item */}
            <div className='relative shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto hover:scale-110 duration-500'>
                <img className='w-cover mx-auto' src={dedeCover} alt='Snold Dede Cover' />
                <a href='https://publuu.com/flip-book/393551/919012/page/1?embed'>
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded opacity-0 transition-opacity duration-300 hover:opacity-100">
                        View More
                    </button>
                </a>
                <p className="absolute bottom-4 text-2xl text-white opacity-0 transition-opacity duration-300 hover:opacity-100">Snold Dede</p>
            </div>

            {/* Grid Item 2 */}
            <div className='relative shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto hover:scale-110 duration-500'>
                <img className='w-cover mx-auto' src={johnCover} alt='John Seliskar Cover' />
                <a href='https://www.linkedin.com/feed/update/urn:li:activity:7173711906296225793/'>
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded opacity-0 transition-opacity duration-300 hover:opacity-100">
                        View More
                    </button>
                </a>
                <p className="absolute bottom-4 text-2xl text-white opacity-0 transition-opacity duration-300 hover:opacity-100">John Seliskar</p>
            </div>

            {/* Grid Item 3 */}
            <div className='relative shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto hover:scale-110 duration-500'>
                <img className='w-cover mx-auto' src={gavinCover} alt='Gavin White Cover' />
                <a href='https://github.com/gavinwhite03/Football-Data-Scraping'>
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded opacity-0 transition-opacity duration-300 hover:opacity-100">
                        View More
                    </button>
                </a>
                <p className="absolute bottom-4 text-2xl text-white opacity-0 transition-opacity duration-300 hover:opacity-100">Gavin White</p>
            </div>
            {/* Grid Item 4 */}
            <div className='relative shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto hover:scale-110 duration-500'>
                <img className='w-cover mx-auto' src={nateCover} alt='Nathaniel Elson Cover' />
                <a href='https://www.linkedin.com/feed/update/urn:li:activity:7167480116682350592/'>
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded opacity-0 transition-opacity duration-300 hover:opacity-100">
                        View More
                    </button>
                </a>
                <p className="absolute bottom-4 text-2xl text-white opacity-0 transition-opacity duration-300 hover:opacity-100">Nathaniel Elson</p>
            </div>
            {/* Grid Item 5 */}
            <div className='relative shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto hover:scale-110 duration-500'>
                <img className='w-cover mx-auto' src={nateCover} alt='Nathaniel Elson Cover' />
                <a href='https://www.linkedin.com/feed/update/urn:li:activity:7167480116682350592/'>
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded opacity-0 transition-opacity duration-300 hover:opacity-100">
                        View More
                    </button>
                </a>
                <p className="absolute bottom-4 text-2xl text-white opacity-0 transition-opacity duration-300 hover:opacity-100">Nathaniel Elson</p>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Players