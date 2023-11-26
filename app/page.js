import Image from 'next/image'
import EyeCatch from './components/eyeCatch'
import SocialMediaBox from './components/socialMediaComponents/socialMediaBox'
import SliderHP from './components/sliderHomePage/SliderHP'
import Head from 'next/head'
 
export default function Home() {
  return (
    <div className='h-max  text-black w-fit bg-[#FF8584]'>
<Head>
        <meta http-equiv="refresh" content="0;url=https://inarishrinecafe.org/">
      </Head>
      <div className=''>
        <Image
          className='mx-auto mb-8 pt-8'
          src = '/Logo/Logo.svg'
          width={46}
          height={46}
          
        />    
      </div>
      <div className="flex justify-center">
        <SliderHP />
      </div>
      <div className='absolute top-[39rem]'>
        <Image
        src='/Chibi/TinyChibiWithTwoFoxes.png'
        width={100}
        height={100}
        />
      </div>
    <div className='mb-16 ml-8 mt-4'>
      <EyeCatch title={"what is a manga cafe?"} description={"At a Manga Cafe, You can grab a drink and read the latest manga or popular clasicss! "}/>

    </div>
   
    <div className='flex justify-end mb-16 mr-8'>
      <EyeCatch title={"What does Inari Mean?"} description={"Inari is The God of harvests, fertility, rice, agriculture, foxes, industry, and worldly success."}/>
    </div>
     
      <div className='mx-16'>
        <SocialMediaBox/>
      </div>
    </div>
  )
}
