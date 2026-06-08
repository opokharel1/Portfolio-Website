import { useState } from "react"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 backdrop-blur-md bg-slate-950/40 border-b border-slate-800">

        <a href="/">
          <h1 className="text-2xl font-bold text-violet-200">
            Option Pokharel
          </h1>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-white">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="/resume.pdf">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

      </nav>

      {/* Mobile sidebar */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-screen w-64 bg-slate-900 shadow-xl p-8 z-[100]">

          <button
            className="text-white text-3xl mb-8"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>

          <ul className="flex flex-col gap-6 text-white">

            <li>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setIsMenuOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="/resume.pdf">
                Resume
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}
    </>
  )
}

export default Navbar