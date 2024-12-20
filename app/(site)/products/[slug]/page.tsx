import Header from '@/components/Header'
import ProductGallery from '@/components/ProductGallery'
import axios from 'axios'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { FaFolder } from 'react-icons/fa'
import { MdWatchLater } from 'react-icons/md'

interface ProductPageProps {
  params: {
    slug: string
  },
}

export default async function Product({ params }: ProductPageProps) {

  let product: any = {}
  await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}products/${params.slug}`, {
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: '0',
    },
  })
    .then(function (response) {
      product = response.data
    })
    .catch(function (error) {
      console.log(error)
      if (error.status === 404) {
        notFound()
      }
      return redirect('/server-error')
    })

    const date = new Date(product.created_at)
   const jalali_date = date.toLocaleDateString('fa-IR')

  return (
    <div className='py-8 flex flex-col'>
      <Header title={product.title} />
      <div className='flex flex-col xl:flex-row justify-between mt-9 gap-6'>
        <div className='flex flex-col w-full xl:w-[70%] rounded-xl'>
          <ProductGallery images={product.images} />
          <div className='w-full p-8 bg-white bg-opacity-70 mt-9 rounded-xl'>
          <div className='flex gap-6 items-center'>
            <p className='text-gray-400 flex gap-3 items-center'>
               <MdWatchLater size={20} /> {jalali_date}
            </p>
            <Link href='/' className='text-gray-400 flex gap-3 items-center'>
               <FaFolder size={20} /> {product.category}
            </Link>
         </div>
            <p className='text-justify mt-4'>
            {product.description}
            </p>
          </div>
        </div>
        <div className='w-full xl:w-[28%]'>
          <div className='w-full p-8 text-center bg-white rounded-xl shadow-md'>
            <p className='text-lg'>
              قیمت محصول
            </p>
            <p className='text-xl font-bold mt-4'>{product.price}</p>
          </div>
          <div className='mt-4 bg-amber-500 rounded-md text-center p-4 text-white text-xl'>
            <Link href='/order'>
            ثبت سفارش
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}