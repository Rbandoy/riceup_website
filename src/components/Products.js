import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';


export function Products() {
  const [products, setProducts] = useState({})
  const [fetchingData, setFetchingdata] = useState(null)

  useEffect(() => {
    setFetchingdata(true)
    makeRequest(); 
  }, [])

  async function makeRequest() {
    console.log("asd")
    try {
      const response = await axios.get('https://secure.riceup.store/ers/api/v1/products/', {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjVlNDkwNDFiYzM0NTRmOThiMzQ5YWUwMjA4MDhkZiIsInVzZXJuYW1lIjoicmVuZSIsImRldmljZUlkIjoiMTIzMTIzMTIzMTI0MTIzIiwiaWF0IjoxNzAwMDY4NDg2LCJleHAiOjE3MDAwNzIwODZ9.tLXiWQX2aTHvRTViRct5nXkwAcT0vl_FJit5xDz1nxU'
        }
      }); 
      setProducts(response.data);
      setFetchingdata(false)
      console.log(fetchingData)
    } catch (error) {
      console.log(error)
      setProducts(error.message || 'An error occurred');
    }
  }
  return (
    <div className="flex  flex-col w-full justify-center items-center mt-[3rem]">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 auto-rows-fr">
        { 
          (fetchingData===false) && products.data.product_info.map(item => (
          <Link to={`products/item?id=${item.id}`}>
          <motion.div
          whileHover={{ scale: 1.01 }}
          className="cursor-pointer grid grid-rows-2 bg-card w-[15rem] h-[25rem] border-2 border-gray-55 
          rounded-10
          hover:border-secondary hover:border-2">
          <div className="flex items-start justify-center row-span-2 col-span-2 bg-card"> 
            <img className="w-full h-full" alt="" src={item.featured_image}/>
            </div>
            <div className="flex bg-primary flex-col items-center row-span-1 col-span-2 border-t-2 border-primary text-primaryText">
              <p className="px-2  w-full"> 
                {`${item.name}: ${item.description?.slice(0, 32)}`} {item.description?.length > 32 ? "...": ""}</p> 
                <p className="px-2 pt-5 w-full    "> 
                {`₱`} {item.price}</p>
                <p className="px-2 pt-5 w-full    "> 
                {`weight:`} {item.weight} {item.unit}</p>
            </div>
          </motion.div>
          </Link>
          ))
        } 
      </div>
    </div>
  )
}