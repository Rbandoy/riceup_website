import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export function Products() {
 
  return (
    <div className="flex  flex-col w-full justify-center items-center mt-[3rem]">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 auto-rows-fr">
        {
          [
            {
              id: 1,
              name: "jasmine",
              variety: "variety",
              description: "Known for its long grains and aromatic flavor, Basmati Royale is perfect for biryanis and pilafs.",
              featuredImage: "https://down-ph.img.susercontent.com/file/563446eaf951a28cc7fb0a2a29358e59",
              images: [
                "",
                "",
              ],
              price: 2000,
              weight: 25,
              unit: "kg"
            },
            {
              id: 2,
              name: "Dinorado",
              variety: "variety",
              description: "Known for its long grains and aromatic flavor, Basmati Royale is perfect for biryanis and pilafs.",
              featuredImage: "https://down-ph.img.susercontent.com/file/563446eaf951a28cc7fb0a2a29358e59",
              images: [
                "",
                "",
              ],
              price: 2000,
              weight: 25,
              unit: "kg"
            },
            {
              id: 2,
              name: "Dinorado",
              variety: "variety",
              description: "Known for its long grains and aromatic flavor, Basmati Royale is perfect for biryanis and pilafs.",
              featuredImage: "https://down-ph.img.susercontent.com/file/5cc2125f190e257b72d97c28f2a33ff2",
              images: [
                "",
                "",
              ],
              price: 2000,
              weight: 25,
              unit: "kg"
            }
            ,
            {
              id: 2,
              name: "Dinorado",
              variety: "variety",
              description: "Known for its long grains and aromatic flavor, Basmati Royale is perfect for biryanis and pilafs.",
              featuredImage: "https://down-ph.img.susercontent.com/file/sg-11134201-23010-4tpdbzh1kzlv9d",
              images: [
                "",
                "",
              ],
              price: 2000,
              weight: 25,
              unit: "kg"
            }
            ,
            {
              id: 2,
              name: "Dinorado",
              variety: "variety",
              description: "Known for its long grains and aromatic flavor, Basmati Royale is perfect for biryanis and pilafs.",
              featuredImage: "https://down-ph.img.susercontent.com/file/563446eaf951a28cc7fb0a2a29358e59",
              images: [
                "",
                "",
              ],
              price: 2000,
              weight: 25,
              unit: "kg"
            }
          ].map(item => (
          <Link to={`item?id=${item.id}`}>
          <motion.div
          whileHover={{ scale: 1.01 }}
          className="cursor-pointer grid grid-rows-2 bg-card w-[15rem] h-[25rem] border-2 border-gray-55 
          rounded-10
          hover:border-secondary hover:border-2">
          <div className="flex items-start justify-center row-span-2 col-span-2 bg-card"> 
            <img className="w-full h-full" alt="" src={item.featuredImage}/>
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
      {/* {modal && <PreviewModal closeModal={closeModal} />} */}
    </div>
  )
}