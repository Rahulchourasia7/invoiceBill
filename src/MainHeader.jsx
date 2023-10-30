import Header from "./Header"
import Home from "./Home"
import { Outlet } from "react-router-dom"

function MainHeader() {
    return (
        <>
        <Header />
     
          <Outlet />
         
         
         </>
     
    )
   
}
export default MainHeader; 