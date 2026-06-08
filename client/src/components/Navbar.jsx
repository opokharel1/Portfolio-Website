function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 backdrop-blur-md bg-slate-950/40 border-b border-slate-800">
      <a href="/">
        <h1 className="text-2xl font-bold text-violet-200">Option Pokharel</h1>
      </a>

      <ul className="flex gap-6 text-white">
        <li><a href="#about" className="hover:text-violet-300 transition">About</a></li>
        <li><a href="#projects" className="hover:text-violet-300 transition">Projects</a></li>
        <li><a href="#projects" className="hover:text-violet-300 transition">Skills</a></li>
        <li><a href="../../public/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-300 transition"
        >
          Resume
        </a></li>
        <li><a href="#contact" className="hover:text-violet-300 transition">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar

