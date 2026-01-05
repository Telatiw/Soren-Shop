import {Swiper,SwiperSlide} from 'swiper/react'
import SaleProduct from './SaleProduct/SaleProduct'
import { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
export default function SaleSection() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${import.meta.env.BASE_URL}Datas/Products.json`)
      const datas = await res.json()
      setProducts(datas.onSalePeoducts
      )
    }
    fetchData()
  }, [])
  return (
    <div className='w-5/6'>
      <Swiper modules={[Autoplay]} autoplay={true} spaceBetween={15} slidesPerView={2} dir='ltr' >
        {
          products.map(product => (
            <SwiperSlide >
              <SaleProduct {...product} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
