export function Featured() {
  return (
    <section id="features">
        <div className='grid place-content-center mt-[13rem]'>
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-center text-6xl md:text-left'>
                 Features
            </h1>
          </div>
          <div className='flex md:flex-row items-center flex-col m-32 space-y-12'>
               
                <p className='max-w-4xl text-center md:mx-20 text-2xl text-secondary md:text-left'>
                At Rice Haven, we take pride in presenting a collection of premium rice varieties that redefine the standard for excellence. Our commitment to quality, sustainability, and authenticity shines through each grain. Here's why our rice is truly exceptional:
                </p>
               

              <div className='flex flex-col space-y-0'>
                <ul className="flex flex-col gap-2"> 
                  {
                    [
                        {
                          id: 1,
                          desc: "Wide Selection"
                        },
                        {
                          id: 2,
                          desc: "Direct Sourcing"
                        },
                        {
                          id: 2,
                          desc: "Convenient Delivery"
                        }, 
                    ].map(item => (
                        <div className='flex flex-grow items-center justify-start gap-2'><img src="https://raw.githubusercontent.com/PKief/vscode-markdown-checkbox/main/logo.png" alt="Item 1" className="w-10 h-10 object-fit object-center" />
                        <li className='text-2xl' key={item.id}>{item.desc}</li></div>
                      ))
                  }
                </ul>
              </div>
              
          </div>  
        </div>
      </section>
  )
}