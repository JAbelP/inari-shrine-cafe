import Image from 'next/image'
import EyeCatch from './components/eyeCatch'
import SocialMediaBox from './components/socialMediaComponents/socialMediaBox'

export default function Home() {
  return (
    <div className='h-screen  text-black w-fit bg-red-500'>
      <div className=''>
        <Image
          src = '/Logo/Logo.svg'
          width={46}
          height={46}
          
        />

      </div>
    <div className='mb-16 ml-8'>
      <EyeCatch title={"what is a manga cafe?"} description={"Lorem ipsum dolor sit amet consectetur. Ut non enim ullamcorper elementum id diam. Fames non varius."}/>

    </div>
   
    <div className='flex justify-end mb-16 mr-8'>
      <EyeCatch title={"What does Inari Mean?"} description={"Lorem ipsum dolor sit amet consectetur. Ut non enim ullamcorper elementum id diam. Fames non varius."}/>
    </div>
     
      <div className='mx-16'>
        <SocialMediaBox/>
      </div>
    </div>
  )
}
