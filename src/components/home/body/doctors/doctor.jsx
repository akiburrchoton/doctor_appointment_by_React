import React from 'react'
import { Link } from 'react-router'

function Doctor({doctor}) {
    const {id, image, name, education, experience, registrationNumber} = doctor

    
  return (
    <>
        {/* CARDS  */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10 mb-4">
            <img 
              src={image} 
              alt="doctor"
              className="rounded-xl" />
          </figure>

          <div className="px-10">
            <div className='flex mb-4'>
              <p className='bg-green/10 border-2 border-green/20 rounded-full text-sm text-green px-3 py-1 mr-3'>Available</p>
              <p className='bg-blue/10 border-2 border-blue/20 rounded-full text-sm text-blue px-3 py-1 mr-3'>{experience} Experience</p>
            </div>

            <div className='pb-10'>
              <h5 className='text-2xl font-bold mb-2'>{name}</h5>
              <p className='text-mainText/60 border-b-2 border-dashed pb-3 border-gray-200 mb-3 font-medium'>{education}</p>
              
              <p className='text-mainText/70 pb-4 font-medium'> <span className='mr-2 border-1 rounded-full px-1 text-xs'>R</span>{registrationNumber}</p>
              
              
              <Link to={`/doctorDetails/${id}`}><button className='w-full border-2 border-blue rounded-full text-blue py-2 font-semibold'>View Details</button></Link>
            </div>
            
          </div>
        </div>
        
    </>
  )
}

export default Doctor