import Image from 'next/image'
import React from 'react'

interface SingleProductImageProps{
   image: string
}

const SingleProductImage = ({ image }: SingleProductImageProps) => {
  return (
    <div className='w-full xl:h-full'>
      <Image 
         src={image}
         alt=''
         width={700}
         height={400}
         className='w-full h-56 xl:h-full object-cover rounded-xl'
      />
    </div>
  )
}

export default SingleProductImage