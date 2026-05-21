function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md">
      <h1 className="text-2xl font-bold text-cyan-400">MyPortfolio</h1>

      <ul className="flex gap-6 text-white">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar