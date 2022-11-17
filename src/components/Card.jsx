import React from 'react'

export default function Card({image}) {
  return (
    <div className="p-4 border shadow-xl card card-compact rounded-2xl border-[#D7D7D7]">
      <figure className='relative'>
        <img src={image} alt="Shoes" className='w-full' />
        <p className='absolute text-3xl text-gray-100 top-2 right-4'>&#9829;</p>
      </figure>
      <div className="flex flex-col mt-4 text-xs gap-y-3">
        <div className='flex justify-between'>
          <p>Desert King</p>
          <p className='font-bold'>1 MBT per night</p>
        </div>
        <div className='flex justify-between'>
          <p>2345km away</p>
          <p className='font-bold'>available for 2weeks stay</p>
        </div>
        <div className="rating rating-sm">
          <input type="radio" name="rating-6" className="bg-[#A02279] mask mask-star-2" />
          <input type="radio" name="rating-6" className="bg-[#A02279] mask mask-star-2"  />
          <input type="radio" name="rating-6" className="bg-[#A02279] mask mask-star-2" />
          <input type="radio" name="rating-6" className="bg-[#A02279] mask mask-star-2" />
          <input type="radio" name="rating-6" className="bg-[#A02279] mask mask-star-2" checked readOnly/>
        </div>
      </div>
    </div>
  )
}
