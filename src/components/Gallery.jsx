import React from 'react'
import Image1 from '../assets/advent-1.jpg'
import Image2 from '../assets/advent-2.1-orig.jpg'
import Image3 from '../assets/ana-1.jpg'
import Image4 from '../assets/ana-2.jpg'
import Image5 from '../assets/profilna.jpg'

const Gallery = () => {
  return (
    <div className="w-full bg-[#F9E0F9] pt-48 px-8 columns-4">
      <div className="">
        <img className="mt-4" src={Image1} />
        <div className="w-16 h-16 bg-white absolute -translate-y-[29rem] translate-x-2 rounded-full"></div>
        <div className="w-16 h-16 bg-white absolute -translate-y-[4.5rem] translate-x-[18rem] rounded-full"></div>
      </div>

      <div className="">
        <img className="mt-4" src={Image1} />
        <div className="w-16 h-16 bg-white absolute -translate-y-[29rem] translate-x-2 rounded-full"></div>
        <div className="w-16 h-16 bg-white absolute -translate-y-[4.5rem] translate-x-[18rem] rounded-full"></div>
      </div>
    </div>
  )
}

export default Gallery