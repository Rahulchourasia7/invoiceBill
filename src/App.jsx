

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Contact from './Contact' 
import './Contact.css'
import About from './About'
import './About.css'
import CreateInvoice from './CreateInvoice'
import './CreateInvoice.css'
import MainHeader from './MainHeader'

import './Home.css'
import './Header.css'
  
function App() {  
   

  return (  
     
  <BrowserRouter>
  <Routes>
<Route path='/' element={<MainHeader /> }>
  <Route index element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/createInvoice' element={< CreateInvoice />} />
  <Route path='/contact' element={<Contact />} />

</Route>

 

  </Routes>
  
  
  
  </BrowserRouter>
  )
}

export default App
 