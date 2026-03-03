import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Form from './pages/Form'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import Layout from './pages/Layout'
import DigitalMarketing from './pages/DigitalMarketing'
import WebDevelopment from './pages/WebDevelopment'
import FieldMarketing from './pages/FieldMarketing'
import About from './pages/About'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/digiMarketing" element={<DigitalMarketing />} />
            <Route path="/fieldMarketing" element={<FieldMarketing />} />
            <Route path="/webDevelopment" element={<WebDevelopment />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default App
