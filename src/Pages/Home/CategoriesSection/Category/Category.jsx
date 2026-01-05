import React from 'react'

export default function Category({title,desc,src}) {
  return (
    <div className='flex flex-col items-center'>
        <img src={`${src}`} alt="" />
        <h4>{title}</h4>
        <p className=''>{desc}</p>
        <div className=' w-full flex items-center justify-around'>
            <span className='text-lg font-semibold'>مشاهده قیمت</span>
            <span className='bg-primary p-1 rounded-full'>
                <img className='w-5 h-5 text-white' src="player-play.svg" alt="" />
            </span>
        </div>
    </div>
  )
}
