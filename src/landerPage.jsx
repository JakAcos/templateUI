import Sidebar from "./sidebar"
import Footer from "./footer"
function LanderPage() {
    //const [count, setCount] = useState(0)
  
    return (
      <>
      <Sidebar />
      <section className="flex h-screen min-h-screen mt-[5px] px-6 md:flex-col md:justify-start">
       <div className="mx-auto flex flex-col ">
        <div className="ml-autoflex w-full flex-col md:mt-60 md:h-full">
            <div className="ml-auto flex flex-col pr-96">
            <h1 className="flex mx-auto mt-[20px] md:mt-0 md:mx-0 text-4xl md:text-5xl font-medium text-[rgb(66,66,83)] pr-96">
                What is Opren?
            </h1>
            <p className="pt-11 text-xl text-[#90969c]">
                Opren is a real time simulation in the cloud as a service.
            </p>
            <p className="text-xl text-[#90969c]">
            That will take away
            the inconvience of slow simulation.
            </p>
            <p className="text-xl text-[#90969c]">
            anytime. anywhere.
            </p>
            </div>
        </div>
       </div>
       <div>
       </div>
       </section>
       <Footer />
      </>
    )
}

  export default LanderPage;