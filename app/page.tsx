import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section>
        <div className='container relative h-[20vh]'>
          <Image
            src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
            alt="Banner"
            sizes="100vw"
            fill
            objectFit='cover'
            style={{
              borderBottomLeftRadius: '30px',
              borderBottomRightRadius: '30px'
            }}
          />
          <div className='absolute bottom-[-25px] w-screen z-10'>
            <div className='grid grid-flow-col justify-center gap-5 px-5'>
              <div className='bg-white rounded-lg drop-shadow-md flex h-[50px] items-center justify-center px-2'>
                <svg width="30px" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5d5d5d" stroke-width="1.6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="28" cy="28" r="20"></circle><line x1="56" y1="56" x2="42.14" y2="42.14"></line></g></svg>
                <input className='w-3/4 px-2' type="text" name='search' id='search' placeholder='Search Your Food' />
                <div className="bg-indigo-500 rounded-lg flex h-[40px] w-[40px] items-center justify-center">
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7639 12H10.0556M3 8.00003H5.5M4 12H5.5M4.5 16H5.5M9.96153 12.4896L9.07002 15.4486C8.73252 16.5688 8.56376 17.1289 8.70734 17.4633C8.83199 17.7537 9.08656 17.9681 9.39391 18.0415C9.74792 18.1261 10.2711 17.8645 11.3175 17.3413L19.1378 13.4311C20.059 12.9705 20.5197 12.7402 20.6675 12.4285C20.7961 12.1573 20.7961 11.8427 20.6675 11.5715C20.5197 11.2598 20.059 11.0295 19.1378 10.5689L11.3068 6.65342C10.2633 6.13168 9.74156 5.87081 9.38789 5.95502C9.0808 6.02815 8.82627 6.24198 8.70128 6.53184C8.55731 6.86569 8.72427 7.42461 9.05819 8.54246L9.96261 11.5701C10.0137 11.7411 10.0392 11.8266 10.0493 11.9137C10.0583 11.991 10.0582 12.069 10.049 12.1463C10.0387 12.2334 10.013 12.3188 9.96153 12.4896Z" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
              </div>
              <div className="bg-white rounded-lg drop-shadow-md flex h-[50px] w-[50px] items-center justify-center">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#121212"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 6H19M21 12H16M21 18H16M7 20V13.5612C7 13.3532 7 13.2492 6.97958 13.1497C6.96147 13.0615 6.93151 12.9761 6.89052 12.8958C6.84431 12.8054 6.77934 12.7242 6.64939 12.5617L3.35061 8.43826C3.22066 8.27583 3.15569 8.19461 3.10948 8.10417C3.06849 8.02393 3.03853 7.93852 3.02042 7.85026C3 7.75078 3 7.64677 3 7.43875V5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H13.4C13.9601 4 14.2401 4 14.454 4.10899C14.6422 4.20487 14.7951 4.35785 14.891 4.54601C15 4.75992 15 5.03995 15 5.6V7.43875C15 7.64677 15 7.75078 14.9796 7.85026C14.9615 7.93852 14.9315 8.02393 14.8905 8.10417C14.8443 8.19461 14.7793 8.27583 14.6494 8.43826L11.3506 12.5617C11.2207 12.7242 11.1557 12.8054 11.1095 12.8958C11.0685 12.9761 11.0385 13.0615 11.0204 13.1497C11 13.2492 11 13.3532 11 13.5612V17L7 20Z" stroke="#121212" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 md:col-span-2">
              <div className='categories h-[80vh] overflow-y-auto pl-4 pt-10'>

                <div className="category mb-5">
                  <div className='relative w-full h-[5rem] mb-1'>
                    <Image
                      className='rounded-xl'
                      src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                      alt="Banner"
                      fill
                      objectFit='cover'
                    />
                  </div>
                  <h4 className='text-center text-base font-semibold tracking-wide'>Burger</h4>
                </div>

                <div className="category mb-5">
                  <div className='relative w-full h-[5rem] mb-1'>
                    <Image
                      className='rounded-xl'
                      src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                      alt="Banner"
                      fill
                      objectFit='cover'
                    />
                  </div>
                  <h4 className='text-center text-base font-semibold tracking-wide'>Burger</h4>
                </div>

                <div className="category mb-5">
                  <div className='relative w-full h-[5rem] mb-1'>
                    <Image
                      className='rounded-xl'
                      src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                      alt="Banner"
                      fill
                      objectFit='cover'
                    />
                  </div>
                  <h4 className='text-center text-base font-semibold tracking-wide'>Burger</h4>
                </div>

                <div className="category mb-5">
                  <div className='relative w-full h-[5rem] mb-1'>
                    <Image
                      className='rounded-xl'
                      src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                      alt="Banner"
                      fill
                      objectFit='cover'
                    />
                  </div>
                  <h4 className='text-center text-base font-semibold tracking-wide'>Burger</h4>
                </div>

                <div className="category mb-5">
                  <div className='relative w-full h-[5rem] mb-1'>
                    <Image
                      className='rounded-xl'
                      src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                      alt="Banner"
                      fill
                      objectFit='cover'
                    />
                  </div>
                  <h4 className='text-center text-base font-semibold tracking-wide'>Burger</h4>
                </div>

                <div className="category mb-5">
                  <div className='relative w-full h-[5rem] mb-1'>
                    <Image
                      className='rounded-xl'
                      src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                      alt="Banner"
                      fill
                      objectFit='cover'
                    />
                  </div>
                  <h4 className='text-center text-base font-semibold tracking-wide'>Burger</h4>
                </div>

                <div className="category mb-5">
                  <div className='relative w-full h-[5rem] mb-1'>
                    <Image
                      className='rounded-xl'
                      src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                      alt="Banner"
                      fill
                      objectFit='cover'
                    />
                  </div>
                  <h4 className='text-center text-base font-semibold tracking-wide'>Burger</h4>
                </div>

                <div className="category mb-5">
                  <div className='relative w-full h-[5rem] mb-1'>
                    <Image
                      className='rounded-xl'
                      src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                      alt="Banner"
                      fill
                      objectFit='cover'
                    />
                  </div>
                  <h4 className='text-center text-base font-semibold tracking-wide'>Burger</h4>
                </div>

                <div className="category mb-5">
                  <div className='relative w-full h-[5rem] mb-1'>
                    <Image
                      className='rounded-xl'
                      src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                      alt="Banner"
                      fill
                      objectFit='cover'
                    />
                  </div>
                  <h4 className='text-center text-base font-semibold tracking-wide'>Burger</h4>
                </div>

              </div>
            </div>
            <div className="col-span-9 md:col-span-10">
              <div className='products bg-[#cccccc] h-[80vh] overflow-y-auto px-4 pt-10'>
                <div className="grid grid-cols-2 gap-4">

                  <div className="product bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-2">
                    <div className='relative w-full h-[6rem] mb-2'>
                      <Image
                        className='rounded-xl'
                        src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                        alt="Banner"
                        fill
                        objectFit='cover'
                      />
                    </div>
                    <div className='details'>
                      <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                      <p className="text-md font-bold text-black truncate block capitalize">Product Name</p>
                      <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                      </div>
                    </div>
                  </div>

                  <div className="product bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-2">
                    <div className='relative w-full h-[6rem] mb-2'>
                      <Image
                        className='rounded-xl'
                        src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                        alt="Banner"
                        fill
                        objectFit='cover'
                      />
                    </div>
                    <div className='details'>
                      <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                      <p className="text-md font-bold text-black truncate block capitalize">Product Name</p>
                      <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                      </div>
                    </div>
                  </div>

                  <div className="product bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-2">
                    <div className='relative w-full h-[6rem] mb-2'>
                      <Image
                        className='rounded-xl'
                        src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                        alt="Banner"
                        fill
                        objectFit='cover'
                      />
                    </div>
                    <div className='details'>
                      <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                      <p className="text-md font-bold text-black truncate block capitalize">Product Name</p>
                      <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                      </div>
                    </div>
                  </div>

                  <div className="product bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-2">
                    <div className='relative w-full h-[6rem] mb-2'>
                      <Image
                        className='rounded-xl'
                        src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                        alt="Banner"
                        fill
                        objectFit='cover'
                      />
                    </div>
                    <div className='details'>
                      <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                      <p className="text-md font-bold text-black truncate block capitalize">Product Name</p>
                      <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                      </div>
                    </div>
                  </div>

                  <div className="product bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-2">
                    <div className='relative w-full h-[6rem] mb-2'>
                      <Image
                        className='rounded-xl'
                        src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                        alt="Banner"
                        fill
                        objectFit='cover'
                      />
                    </div>
                    <div className='details'>
                      <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                      <p className="text-md font-bold text-black truncate block capitalize">Product Name</p>
                      <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                      </div>
                    </div>
                  </div>

                  <div className="product bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-2">
                    <div className='relative w-full h-[6rem] mb-2'>
                      <Image
                        className='rounded-xl'
                        src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                        alt="Banner"
                        fill
                        objectFit='cover'
                      />
                    </div>
                    <div className='details'>
                      <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                      <p className="text-md font-bold text-black truncate block capitalize">Product Name</p>
                      <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                      </div>
                    </div>
                  </div>

                  <div className="product bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-2">
                    <div className='relative w-full h-[6rem] mb-2'>
                      <Image
                        className='rounded-xl'
                        src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                        alt="Banner"
                        fill
                        objectFit='cover'
                      />
                    </div>
                    <div className='details'>
                      <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                      <p className="text-md font-bold text-black truncate block capitalize">Product Name</p>
                      <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                      </div>
                    </div>
                  </div>

                  <div className="product bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-2">
                    <div className='relative w-full h-[6rem] mb-2'>
                      <Image
                        className='rounded-xl'
                        src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
                        alt="Banner"
                        fill
                        objectFit='cover'
                      />
                    </div>
                    <div className='details'>
                      <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                      <p className="text-md font-bold text-black truncate block capitalize">Product Name</p>
                      <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
