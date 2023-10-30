
import { NavLink } from "react-router-dom"
function Header() {
    return (

   
    
          <> 
          <header> 
            
<ul className="menulist"> 
 <li><NavLink to='/'>Home</NavLink></li>
 <li><NavLink to='/about'>About</NavLink></li>
 <li><NavLink to='createInvoice'>CreateInvoice</NavLink></li>
 <li><NavLink to='/Contact'>contact</NavLink></li>
</ul>

    </header>    
          </> 
    )
}
export default Header