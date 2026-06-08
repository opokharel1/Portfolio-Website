import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Embedded from "./pages/Embedded"
import Software from "./pages/Software"
import Data from "./pages/Data"
import Writing from "./pages/Writing"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/embedded" element={<Embedded />} />

        <Route path="/software" element={<Software />} />

        <Route path="/data" element={<Data />} />

        <Route path="/writing" element={<Writing />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App