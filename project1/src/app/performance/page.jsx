import Image from 'next/image'
import React from 'react'
import img from 'public/globe.svg'
function page() {
  return (
    <div>page

        <Image
        src={img}
        
        alt='wwe'
        style={{objectFit:'cover'}}
        />
    </div>
  )
}

export default page