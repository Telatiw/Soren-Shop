import React from 'react'

export default function NavBar() {
  return (
    <nav className='w-screen py-3 px-3 bg-primary'>
      <div className='flex items-center justify-between'>
        <svg className='w-8 h-8'><use href='#menu'></use></svg>
        <h3 className='text-4xl text-secondary font-semibold flex-2  text-center'>سورن</h3>
        <div className='flex '>
          <svg className='w-8 h-8 relative'><use href='#search'>
          </use></svg>
          <svg className='w-8 h-8'><use href='#like'></use></svg>
          <div className='relative  left-3 w-6 h-6 flex justify-center items-center rounded-full bg-thirdary'>
            <span className='flex mt-1 font-semibold'>1</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
