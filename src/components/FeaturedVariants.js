export function FeaturedVariants() {
  return (
    <section id='varieties'>
        <div className='grid place-content-center mt-[13rem]'> 
        
            <div className='flex flex-col items-center'> 
           
              <h1 className='font-bold text-center text-6xl md:text-left'>
              Featured Rice Varieties
              </h1>

              {
                [
                  {
                    id: 1,
                    name: "1. Basmati Royale",
                    desc: "Known for its long grains and aromatic flavor, Basmati Royale is perfect for biryanis and pilafs."
                  },
                  {
                    id: 2,
                    name: "2. Jasmine Blossom",
                    desc: "Savor the fragrant and slightly sticky texture of Jasmine Blossom, ideal for Asian-inspired dishes."
                  },
                  {
                    id: 2,
                    name: "3. Wild Rice Blend",
                    desc: "Experience the nutty flavor and unique texture of our Wild Rice Blend, a versatile addition to any meal."
                  },
                ].map(item => (
                  <>
                    <h2 className='font-bold text-center text-3xl mt-8'>
                      {item.name}
                    </h2>
                    <p className='max-w-5xl mt-6 sm:max-w-4xl sm:mx-20 text-center text-3xl text-secondary '>
                      {item.desc}
                    </p>
                  </>
                ))
              }  
              <div className='mt-[5rem]'>
                {/* <GetStartedButton /> */}
              </div>
            </div>
           
        </div>
      </section>
  )
}