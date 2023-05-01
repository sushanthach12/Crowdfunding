import Hero from "@/components/Hero";
import Campaign from "@/components/Campaign/Campaign";
import About from "@/components/About";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <main className="mx-4">
      <Hero />

      <About/>

      <Steps/>

      <Campaign/>


    </main>
  )
}
