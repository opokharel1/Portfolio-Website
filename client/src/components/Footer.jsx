function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">

        {/* <h3 className="text-xl font-semibold text-violet-400">
          Option Pokharel
        </h3> */}

        <p className="text-slate-400 mt-2">
          Building software, embedded systems, and
          data-driven solutions.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/opokharel1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/option-pokharel-550958289"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400"
          >
            LinkedIn
          </a>

          <a
            href="mailto:opokharel003@gmail.com"
            className="hover:text-violet-400"
          >
            Email
          </a>
        </div>

        <p className="text-slate-500 text-sm mt-8">
          © 2026 Option Pokharel. Designed and developed by me 💜
        </p>

      </div>
    </footer>
  )
}

export default Footer