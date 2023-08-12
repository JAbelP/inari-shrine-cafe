import React from 'react'
import Image from 'next/image'
import { Rubik } from 'next/font/google'


const rubik = Rubik({
    subsets: ['latin'],
})

function SocialMediaBar({SocialMediaTitle, SocialMediaIcon, SocialMediaLink}) {
  return (
    <a  href={SocialMediaLink} target="_blank" rel="noopener noreferrer" >
      <div className="w-72 h-7 pr-5 pl-5 py-0.5 text-black bg-purple-800 rounded items-center mb-1 gap-6 inline-flex">
    
          <img className="w-4 h-4" src={SocialMediaIcon} />
        
        <div className="text-white text-base 
                          font-bold tracking-widest ">
                              <p className={rubik.className}>
                                  {SocialMediaTitle}
                              </p>
        </div>
        
      </div>
    </a>
  )
}

export default SocialMediaBar