import Hero from "@/components/Hero";
import Campaign from "@/components/Campaign/Campaign";
import About from "@/components/About";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <main className="mx-4 z-50">

      {/* <div className='flex justify-center items-center z-0 right-0 left-0 fixed top-0 bottom-0'>
        <div className='relative flex justify-center items-center'>
          <div className='absolute h-[400px] w-[400px] rounded-full border-2 border-red-400 animate-bounce'></div> 
          <div className='absolute h-[500px] w-[500px] rounded-full border-2 border-green-400 animate-ping'></div>
          <div className='absolute h-[600px] w-[600px] rounded-full border-2 border-green-400 animate-ping'></div>
          <div className='absolute h-[800px] w-[800px] rounded-full border-2 border-green-400 animate-ping'></div>
        </div>
      </div> */}

      <Hero />

      <About />

      <Steps />

      <Campaign />
    </main>
  )
}
