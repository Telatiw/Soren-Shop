import React from 'react'
import Header from './Header/Header'
import HeaderBox from './HeaderBox/HeaderBox'
import SaleSection from './SaleSection/SaleSection'
import CategoriesSection from './CategoriesSection/CategoriesSection'
export default function Home() {
  return (
    <div className='flex flex-col gap-5 items-center'>
      <Header />
      <HeaderBox src='egzoz.jpg' />
      <HeaderBox src='header2.jpg' />
      <div className='w-5/6 flex justify-between items-center gap-5'>
        <h4 className=' text-3xl font-semibold'>تخفیف <span className='font-light'>ویژه</span></h4>
        <div className='h-px flex-2 bg-secondary'></div>
      </div>
      <SaleSection />
      <div className='w-5/6 flex justify-between items-center gap-5'>
        <h4 className=' text-3xl font-semibold'>دسته بندی های <span className='font-light'>بالا</span></h4>
        <div className='h-px flex-2 bg-secondary'></div>
      </div>
        <CategoriesSection />
    </div>
  )
}