import { useEffect } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function ItemPreview() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const itemId = query.get('id');
  const navigate  = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const [quantity, setQuantity] = useState(0)
  
  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', updateScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);
  useEffect(() => {
    if (!itemId) navigate('/products');
    console.log("effect ", <Slider />)
  }, [itemId])

  const item ={
    id: 2,
    name: "Dinorado",
    variety: "variety",
    description: "Known for its long grains and aromatic flavor, Basmati Royale is perfect for biryanis and pilafs.",
    featuredImage: "https://down-ph.img.susercontent.com/file/563446eaf951a28cc7fb0a2a29358e59",
    images: [
      "https://down-ph.img.susercontent.com/file/563446eaf951a28cc7fb0a2a29358e59",
      "https://down-ph.img.susercontent.com/file/05b2a893a0c5c1d43f10171f97bb2403", 
      "https://down-ph.img.susercontent.com/file/05b2a893a0c5c1d43f10171f97bb2403", 
      "https://down-ph.img.susercontent.com/file/05b2a893a0c5c1d43f10171f97bb2403", 
      "https://down-ph.img.susercontent.com/file/05b2a893a0c5c1d43f10171f97bb2403",
    ],
    price: 2000,
    weight: 25,
    unit: "kg"
  }
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
    setQuantity(quantity+1)
  }

  function minusQuantity() {
    if (quantity > 0) {
      setQuantity(quantity-1)
    }
  }
  
  return (
    <div className="flex mb-[20rem] sm:mb-[25rem] flex-col  h-auto w-full justify-center items-center mt-[3rem]">
      <div class="w-[19rem] h-[25rem] sm:h-[30rem] sm:w-[30rem]  md:w-[50rem] lg:w-[60rem]   flex flex-col grid-row-1">
        <div className='border-card border-2 md:flex-row flex flex-col  justify-center md:justify-start  align-center'>   
         <div className="border-2 max-w-full md:max-w-[20rem] lg:max-w-[30rem] cursor-pointer md:mx-10 sm:mx-5 sm:max-w-[30rem]" >
         <Slider  {...settings}>
          {
            item.images.map(item => ( 
              <img src={item} alt="Slide 3" className="w-full h-full" /> 
            ))
          }
          </Slider> 
          <div className='justify-center flex mt-10'>
          {
            item.images.map(item => ( 
              <img className="w-[3rem] h-[4rem] sm:w-[5rem] sm:h-[6rem] cursor-pointer" src={item} alt="Slide 3"   /> 
                ))
          }  
          </div>
         </div> 
         <div className='flex flex-col justify-start mt-10 mx-5 mb-5'>
          <div>
            <h1>{item.name}</h1>

            <p className='mt-10'>{`₱`} {item.price}</p>
            <div className='mt-10'>
              <div className='flex justify-between'>
                <p>Quantity</p>
                <div className='mx-[3rem] sm:mx-[8rem] flex flex-row  justify-between w-[10rem] md:mx-[4rem]'>
                  <button onClick={() => addQuantity()} className='border-2 px-5'>+</button>
                  <p className='border-2 px-5'>{quantity}</p>
                  <button onClick={() => minusQuantity()} className={`border-2 px-5 ${quantity === 0 ? "bg-primary": ""} `}>-</button>
                </div>
              </div>
              <div className='flex justify-center gap-2 mt-[4rem]  '>
                <button className='w-[10rem] border-2 px-5 bg-primary hover:bg-neutral hover:border-primary'>Add To Cart</button>
                <button  className='w-[10rem] border-2 py-4 px-5 bg-secondary  hover:bg-neutral hover:border-secondary'>Buy Now</button>
              </div>
          </div>
          </div> 
         </div>
        </div>  
      </div>  
    </div>
  )
}