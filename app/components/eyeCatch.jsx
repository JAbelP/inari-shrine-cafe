import React from 'react'
import { Rubik } from 'next/font/google'
import localFont from 'next/font/local'

const SunnySpell = localFont({src: "../../fonts/SunnySpellsBasicRegular.ttf"})

const rubik = Rubik({
    subsets: ['latin'],
})

function EyeCatch({title, description}) {
  return (
        <div className=" font-[SunnSpell] w-fit max-w-[313px] bg-orange-300 rounded border-4 border-black">
            <div className='px-4 pt-3 pb-2'>
                <div className=" font-headerFont text-center text-black text-2xl font-normal capitalize tracking-wider"><h4 className={SunnySpell.className}>{title}</h4></div>
            </div>
            <div className=" h-2 w-full bg-purple-800" />
            <div className='px-4 pt-3 pb-2'>
                <div className="text-center text-black capitalize font-semibold"><p className={rubik.className}> {description} </p></div>
            </div>
        </div>
  )
}

export default EyeCatch