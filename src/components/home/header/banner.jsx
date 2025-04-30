import React from 'react'

function Banner() {
  return (
    <div className='font-main mt-5 '>
      <div className='w-11/12 mx-auto bg-white flex flex-col items-center justify-center py-16 border-3 border-gray-300 rounded-2xl'>
        
        <h1 className='text-4xl font-bold px-80 mb-4 text-center'>Dependable Care, Backed by Trusted Professionals.</h1>
        <p className='text-sm px-65 text-center mb-6'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                
        <div className="join mb-8 w-2/3 justify-center">
          <input className="input rounded-full mr-5 text-xs" placeholder="Search any doctor..." />
          <button className="btn bg-blue text-white join-item rounded-full px-6">Search Now</button>
        </div>

        <div className='flex justify-between'>
          <img className='mr-10' src="assets/banner-img-1.png" alt="" />
          <img src="assets/banner-img-1.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner