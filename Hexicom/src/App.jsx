import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar/Navbar'
import MainPage from './Pages/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './Component/Sidebar/Sidebar'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Address from './Pages/Address'
import ScrollToTop from './Component/ScrollToTop'

function App() {
  const [sidebar, setSidebar] = useState(true)
  const setSidebarfunc =(value)=>{
       setSidebar(value)
  }
 


  return (
    <>
    <div className='app'>
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar setSidebarfunc={setSidebarfunc} sidebar={sidebar}/>
      
      {/* <Sidebar sidebar={sidebar}/> */}
      <Routes>
         <Route path="/" element={<MainPage sidebar={sidebar} setSidebarfunc={setSidebarfunc}/>} />
        <Route path="/about" element={<About sidebar={sidebar} setSidebarfunc={setSidebarfunc}/>} />
        <Route path="/contact" element={<Contact sidebar={sidebar} setSidebarfunc={setSidebarfunc}/>} />
{/*         <Route path='/address' element={<Address sidebar={sidebar} setSidebarfunc={setSidebarfunc} />}/> */}
        <Route path="/services" element={<Service sidebar={sidebar} setSidebarfunc={setSidebarfunc}/>} />
       
      </Routes>
      </BrowserRouter>
      
    </div>
     
    </>
  )
}

export default App
