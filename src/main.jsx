import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import App from './App'
import About from './components/About/About'
import AlumniDirectory from './components/AlumniDirectory/AlumniDirectory'
import ContactUs from './components/ContactUs/ContactUs'
import Donate from './components/Donate/Donate'
import EventDetails from './components/EventDetails/EventDetails'
import Events from './components/Events/Events'
import Home from './components/Home/Home'
import PostDetails from './components/PostDetails/PostDetails'
import './css/style.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/events' element={<Events />} />
      <Route path='/events/:slug' element={<EventDetails />} />
      <Route path='/alumni-directory' element={<AlumniDirectory />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/donate' element={<Donate />} />
      <Route path='/posts/:slug' element={<PostDetails />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
