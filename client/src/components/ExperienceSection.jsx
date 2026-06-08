import { Link } from "react-router-dom"

function ExperienceSection() {

  return (

    <section className="py-24 px-6" id="projects">

      <h2 className="text-5xl font-bold text-center mb-16">
        My Experiences
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Software */}
        <Link to="/software">

          <div className="bg-gray-900 p-10 rounded-2xl border border-gray-700 hover:border-violet-400 hover:scale-105 transition duration-300 cursor-pointer">

            <h3 className="text-3xl font-bold mb-3 text-violet-100">
              Software
            </h3>

            <p className="text-gray-400">
              React, Node.js, APIs, backend systems, full-stack apps
            </p>

          </div>

        </Link>

         {/* Embedded */}
        <Link to="/embedded">

          <div className="bg-gray-900 p-10 rounded-2xl border border-gray-700 hover:border-violet-400 hover:scale-105 transition duration-300 cursor-pointer">

            <h3 className="text-3xl font-bold mb-4 text-violet-100">
              IoT & Embedded
            </h3>

            <p className="text-gray-400">
              STM32, ESP32, CAN, BLE, RTOS, sensors, firmware systems
            </p>

          </div>

        </Link>

        {/* Data */}
        <Link to="/data">

          <div className="bg-gray-900 p-10 rounded-2xl border border-gray-700 hover:border-violet-400 hover:scale-105 transition duration-300 cursor-pointer">

            <h3 className="text-3xl font-bold mb-4 text-violet-100">
              Data & AI
            </h3>

            <p className="text-gray-400">
              Machine learning, analytics, visualization, AI experiments
            </p>

          </div>

        </Link>

        {/* Composition */}
        <Link to="/writing">

          <div className="bg-gray-900 p-10 rounded-2xl border border-gray-700 hover:border-violet-400 hover:scale-105 transition duration-300 cursor-pointer">

            <h3 className="text-3xl font-bold mb-4 text-violet-100">
              Research & Writing
            </h3>

            <p className="text-gray-400">
              Technical Blogs, Reflections, Academic Work
            </p>

          </div>

        </Link>

      </div>

    </section>

  )
}

export default ExperienceSection