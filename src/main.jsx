import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home/Home'
import About from'./components/About/About'
import Events from './components/Events/Events'
import AlumniDirectory from './components/AlumniDirectory/AlumniDirectory'
import ContactUs from './components/ContactUs/ContactUs'

const router =createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/events" element={<Events />} />
      <Route path="/alumni-directory" element={<AlumniDirectory />} />
<Route path="/contact-us" element={<ContactUs />} />
  </Route>
)
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
