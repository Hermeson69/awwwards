import Hero from "./components/HeroSection"
import About from "./components/About"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <main className="relative min-h-screen w-screen 
      overflow-x-hidden">
        <Navbar/>
        <Hero/>
        <About/>
      </main>
    </>
  )
}

export default App