import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Contact />
    </div>
  )
}

export default App