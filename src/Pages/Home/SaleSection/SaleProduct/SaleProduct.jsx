export default function SaleProduct({ id,img, title, price, sale }) {
  return (
    <div  className="border rounded-sm py-4 p-2 flex flex-col items-end gap-5">
      <h5 className="text-2xl font-semibold ">{title}</h5>
      <button className="bg-forthary rounded-sm text-thirdary font-semibold -skew-x-12 p-1 text-sm ">
        <span className="skew-x-12  -rotate-[12px] block">
          فروش ویژه
        </span>
      </button>
      <img src={img} alt="" />
      <div className="rating ">
        <input type="radio" name={`rating-${id}`} className="rating-hidden" />
        <input type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-primary" aria-label="1 star" />
        <input type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-primary" aria-label="2 star" />
        <input type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-primary" aria-label="3 star" defaultChecked />
        <input type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-primary" aria-label="4 star" />
        <input type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-primary" aria-label="5 star" />
      </div>
      <div className="flex flex-col">
        <span className=" font-vazirmatn font-semibold line-through text-gray-500 text-2xl">{price} تومان</span>
        <span className=" font-vazirmatn font-semibold text-forthary text-2xl">{sale} تومان</span>
      </div>
    </div>
  )
}
