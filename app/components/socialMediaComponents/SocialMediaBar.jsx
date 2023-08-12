import React from 'react'
import Image from 'next/image'

function SocialMediaBar({SocialMediaTitle, SocialMediaIcon}) {
  return (
    <div className="w-52 h-7 pr-5 pl-5 py-0.5 text-black bg-purple-800 rounded items-center mb-1 gap-6 inline-flex">
   
        <img className="w-4 h-4" src={SocialMediaIcon} />
      
      <div className="text-white text-base font-bold tracking-widest ">{SocialMediaTitle}</div>
    </div>
  )
}

export default SocialMediaBar