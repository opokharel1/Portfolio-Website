function FeaturedProjects() {
  const projects = [
     {
      title: "Portfolio Website",
      description:
        "Full-stack portfolio with React, Express, MongoDB.",
    },
    {
      title: "CAN Bus Monitoring System",
      description:
        "STM32 and ESP32 communication using CAN protocol.",
    },
    {
      title: "BLE Telemetry Dashboard",
      description:
        "Real-time telemetry between embedded device and mobile app.",
    },
  ]

  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-900 p-6 rounded-xl border border-slate-800"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects