import { useEffect } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

export function ItemPreview() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const itemId = query.get('id');
  const navigate  = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const [quantity, setQuantity] = useState(198)
  
  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  const [products, setProducts] = useState({})
  const [fetchingData, setFetchingdata] = useState(null)


  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', updateScreenSize);
    setFetchingdata(true)
   
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  let item = {}

  async function makeRequest() {
  
    try {
      const response = await axios.get(`https://secure.riceup.store/ers/api/v1/products/${itemId}`);  

      if (response.data?.is_success) {
        setProducts(response.data.data);
        setFetchingdata(false)
        console.log(response.data.data) 
        console.log("prod",products) 
      }
    } catch (error) { 
      setProducts(error.message || 'An error occurred');
    } 
  }

  useEffect(() => {
    if (!itemId) navigate('/products');
    console.log("effect ", <Slider />)
    makeRequest(); 
  }, [itemId])

 

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,   background: "#ccc", width: "20px", height: "20px", paddingTop: "2px", paddingBottom: "2px", borderRadius: "20px"  }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props; 
    return (
      <div
        className={className}
        style={{ ...style,   background: "#ccc", width: "20px", height: "20px", paddingTop: "2px", paddingBottom: "2px", borderRadius: "20px"  }}
        onClick={onClick}
      />
    );
  }
  
   const settings = { 
    customPaging: function(i) { 
       return(<></>)
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  
  function addQuantity(){
    if (quantity < products.product_info[0].stock_quantity)
      setQuantity(quantity+1)
  }

  function minusQuantity() {
    if (quantity > 0) {
      setQuantity(quantity-1)
    }
  }
  
  return (
    <div className="flex mb-[30rem] sm:mb-[25rem] flex-col  h-auto w-full justify-center items-center mt-[3rem]">
      <div class="w-[19rem] h-[25rem] sm:h-[30rem] sm:w-[30rem]  md:w-[50rem] lg:w-[60rem]   flex flex-col grid-row-1">
      { 
      (fetchingData == false) ? (
        <div className='border-card border-2 md:flex-row flex flex-col  justify-center md:justify-start  align-center'>   
         <div className="border-2 max-w-full md:max-w-[20rem] lg:max-w-[30rem] cursor-pointer md:mx-10 sm:mx-5 sm:max-w-[30rem]" >
         <Slider  {...settings}>
          {
            products.images.map(item => ( 
              <img src={item} alt="Slide 3" className="w-full h-full" /> 
            ))
          }
          </Slider> 
          <div className='justify-center flex mt-10'>
          {
            products.images.map(item => ( 
              <img className="w-[3rem] h-[4rem] sm:w-[5rem] sm:h-[6rem] cursor-pointer" src={item} alt="Slide 3"   /> 
                ))
          }  
          </div>
         </div> 
         <div className='flex flex-col justify-start mt-10 mx-5 mb-5'>
          <div>
            <h1 className="font-bold" style={{textTransform: 'uppercase'}}>{products.product_info[0].name}</h1>
            <p className='mt-10 text-primaryText'>Stock:  {products.product_info[0].stock_quantity}</p>
            <p className='mt-10'>{`₱`} {products.product_info[0].price} / {products.product_info[0].weight}{products.product_info[0].unit}</p>
            <div className='mt-10'>
              <div className='flex justify-between'>
                <p>Quantity</p>
                <div className='mx-[3rem] sm:mx-[8rem] flex flex-row  justify-between w-[10rem] md:mx-[4rem]'>
                  <button onClick={() => addQuantity()} className={`border-2 px-5 ${quantity === products.product_info[0].stock_quantity ? "bg-primary": ""} `}>+</button>
                  <p className='border-2 px-5'>{quantity}</p>
                  <button onClick={() => minusQuantity()} className={`border-2 px-5 ${quantity === 0 ? "bg-primary": ""} `}>-</button>
                  
                </div> 
              </div>
              <div className='flex justify-between mt-5 '>
                <p>Total: {Number(products.product_info[0].price) * quantity}</p>
              </div>
              <div className='flex justify-center gap-2 mt-[4rem]  '>
                <button className='w-[10rem] border-2 px-5 bg-primary hover:bg-neutral hover:border-primary'>Add To Cart</button>
                <button  className='w-[10rem] border-2 py-4 px-5 bg-secondary  hover:bg-neutral hover:border-secondary'>Buy Now</button>
              </div>
          </div>
          </div> 
         </div>
        </div>) : ""
}
      </div>  
    </div> 
  )
}