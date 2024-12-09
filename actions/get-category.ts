import axios from "axios"

export async function getPostCategory() {
   let category: any
   await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}post/categories/`)
      .then(function (response) {
         category = response.data
      })
      .catch(function (error) {
         console.log(error)
      })
   return category
}

export async function getProductCategory() {
   let category: any
   await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}product/categories/`)
      .then(function (response) {
         category = response.data
      })
      .catch(function (error) {
         console.log(error)
      })
   return category
}

export default async function getCategory(id: number) {
   let category: any
   await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/categories/${id}`)
      .then(function (response) {
         category = response.data
      })
      .catch(function (error) {
         console.log(error)
      })
   return category
}