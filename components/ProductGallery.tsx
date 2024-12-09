'use client'

import Image from 'next/image'
import SingleProductImage from './SingleProductImage'

interface ProductGalleryProps {
   images: any
}

const ProductGallery = ({ images }: ProductGalleryProps) => {
  return (
    <div className='w-full xl:h-[600px] flex flex-col-reverse xl:flex-row gap-3'>
      <div className='xl:h-full flex flex-row xl:flex-col items-center justify-between'>
         {images.map((image: any) => (
            <Image 
               src={image.img_path}
               alt=''
               width={200}
               height={50}
               className='xl:h-1/5 w-1/5 xl:w-full rounded-lg object-cover'
            />
         ))}
      </div>
      <SingleProductImage image={images[0].img_path}/>
    </div>
  )
}

export default ProductGallery