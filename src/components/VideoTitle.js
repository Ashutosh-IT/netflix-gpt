import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='text-white pt-44 pl-28 absolute z-10 top-0 bg-gradient-to-r from-black w-screen h-[90%]'>
        <h1 className='text-6xl font-extrabold'>{title}</h1>
        <p className='py-6 text-md w-1/3 text-justify'>{overview}</p>
        <div className='flex gap-4 mt-5'>
            <button className='bg-white text-black px-4 py-2 rounded-md font-bold w-32 text-center hover:bg-opacity-80'>▶Play</button>
            <button className='bg-gray-600 text-white px-4 py-2 rounded-md font-bold w-32 bg-opacity-50'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle