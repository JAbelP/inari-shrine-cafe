import React from 'react'

function EyeCatch({title, description}) {
  return (
        <div className="w-fit max-w-[313px] bg-orange-300 rounded border-4 border-black">
            <div className='px-4 pt-3 pb-2'>
                <div className="text-center text-black text-2xl font-normal capitalize"><h4>{title}</h4></div>
            </div>
            <div className=" h-2 w-full bg-zinc-700" />
            <div className='px-4 pt-3 pb-2'>
                <div className="text-center text-black font-normal capitalize">{description}</div>
            </div>
        </div>
  )
}

export default EyeCatch