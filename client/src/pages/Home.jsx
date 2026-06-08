import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ExperienceSection from "../components/ExperienceSection"
import FeaturedProjects from "../components/FeaturedProjects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-20" >
      <Navbar />

      <Hero />

      <ExperienceSection />

      <FeaturedProjects />

      <Contact />

      <Footer />

    </div>
  )
}

export default Home