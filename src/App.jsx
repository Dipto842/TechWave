
import Nav from './Contenar/Navbar/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Contenar/Footer/Footer'

function App() {
 

  return (
  <div>
    <Nav></Nav>
    <Outlet></Outlet>
    <Footer></Footer>
  </div>
  )
}

export default App
