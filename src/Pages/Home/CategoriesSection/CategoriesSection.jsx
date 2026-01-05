import React from 'react'
import Category from './Category/Category'

export default function CategoriesSection() {
  return (
    <div className='border border-thirdary w-5/6 gap-5 grid grid-cols-2 grid-rows-2 p-5' >
      <Category src="stop.jpg" title="چرخ و لاستیک" desc="سیستم توربو 
            چرخ و لاستیک
            قطعات موتور 
            فیلتر های عملکرد"  />
      <Category src="tires.jpg" title="قطعات ترمز" desc="سیستم توربو 
            چرخ و لاستیک
            قطعات موتور 
            فیلتر های عملکرد"  />
      <Category src="oil.jpg" title="سیستم ها توربو" desc="سیستم توربو 
            چرخ و لاستیک
            قطعات موتور 
            فیلتر های عملکرد"  />
      <Category src="turbo.jpg" title="روغن موتور" desc="سیستم توربو 
            چرخ و لاستیک
            قطعات موتور 
            فیلتر های عملکرد"  />
    </div>
  )
}