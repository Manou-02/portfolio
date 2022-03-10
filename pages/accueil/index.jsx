import Image from 'next/image'
import React from 'react'

function index() {
  return (
      <div className='my-20 mx-60 flex space-x-10'>
            <div className="">
                  <div className="my-10">
                        <h1 className='text-cyan-900 font-extrabold text-5xl'>Developpeur fullstack</h1>
                  </div>
                  <div className="my-10">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perspiciatis iste labore est sequi. Explicabo dolores cumque adipisci doloremque distinctio a, quidem repellendus aspernatur, repudiandae, molestias porro illo animi provident. </p>
                  </div>
                  <button className='bg-cyan-900 text-white py-2 px-4 rounded'>Contactez-moi</button>
            </div>
            <div className="w-full h-full">
                  <img src='/1.png' className='w-max h-max'/>
            </div>
      </div>
  )
}

export default index