import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

const Form = lazy(() => import('./pages/Form'))
const Home = lazy(() => import('./pages/Home'))
const Contact = lazy(() => import('./pages/Contact'))
const Layout = lazy(() => import('./pages/Layout'))
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'))
const WebDevelopment = lazy(() => import('./pages/WebDevelopment'))
const FieldMarketing = lazy(() => import('./pages/FieldMarketing'))
const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))
const Gallery = lazy(() => import('./pages/Gallery'))

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div className="route-loading">Loading...</div>}>
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
        </Suspense>
      </BrowserRouter>



    </div>
  )
}

export default App
