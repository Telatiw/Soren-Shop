import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='w-full flex flex-col gap-5 p-10 bg-primary'>
        <ul className='flex gap-5 justify-center'>
          <li className=' flex justify-center items-center px-2 aspect-square border rounded-full' >
            <img src="brand-facebook.svg" alt="" />
          </li>
          <li className=' flex justify-center items-center px-2 aspect-square border rounded-full' >
            <img src="brand-x.svg" alt="" />
          </li>
          <li className=' flex justify-center items-center px-2 aspect-square border rounded-full' >
            <img src="brand-instagram.svg" alt="" />
          </li>
          <li className=' flex justify-center items-center px-2 aspect-square border rounded-full' >
            <span className='text-2xl'>in</span>
          </li>
          <li className=' flex justify-center items-center px-2 aspect-square border rounded-full' >
            <img src="wifi.svg" alt="" />
          </li>
        </ul>
        <div>
          <h5 className='text-4xl'>توصیه های مهم ما </h5>
          <p>اگر بیشتر از ۵ میلیون تومان خرید کنید از ۳۰٪ تخفیف بهره مند می شوید.</p>
        </div>
        <button className='bg-secondary text-2xl self-center text-thirdary px-6 py-2 rounded-full'>مشاهده کنید</button>
      </div>
      <div className=' w-full px-4 flex flex-col gap-5 py-5'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-3xl'>عضویت در خبرنامه</h2>
          <p>ما هرگز آدرس ایمیل شما را به اشتراک نمی گذاریم</p>
          <form className='w-full flex items-center' >
            <input className='bg-thirdary w-full h-full py-2 px-4' type="text" placeholder='آدرس ایمیلتان را وارد کنید' />
            <button className='bg-secondary px-4 py-2 text-thirdary'>اشتراک</button>
          </form>
        </div>
        <div className='flex flex-col gap-3'>
          <h6 className='text-2xl font-semibold'>حساب من</h6>
          <span>حساب من</span>
        </div>
        <div>
          <h6 className='text-2xl font-semibold'>اطلاعات</h6>
          <ul className=''>
            <li>اطلاعات تحویل </li>
            <li>سیاست حفظ حریم خصوصی</li>
            <li>شرایط و ضوابط</li>
            <li>تماس با ما </li>
            <li>برگشتن</li>
            <li>وابسته</li>
          </ul>
        </div>
        <div className='flex flex-col gap-3'>
          <h5 className='text-5xl font-semibold'>سورن</h5>
          <p>بهترین تعمیرگاه خاورمیانه</p>
        </div>
        <div className='flex flex-col gap-1'>
          <h6 className='text-2xl font-semibold'>آدرس</h6>
          <address>ایران - مشهد</address>
          <h6></h6>
          <p>تلفن:000000000</p>
        </div>
      </div>
    </div>
  )
}