import MainHeader from "./MainHeader"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import Homeimg from './images/homeimg.png' 
import caliber from './images/caliber.jpg'
import calculator from './images/calculator.png'
function Home(){ 
    return (
        <>
   <img src={Homeimg} alt="" className="Homeimg1" />

<img src={caliber} alt="" className="caliber"/>

<h2 className="intro"> A complete Accounting Software <br /> with e-invoicing capabality.</h2>

<h2 className="into1">E-invoicing under GST is a cinch with Caliber Books</h2>
<h2 className="into2">The latest announcement from CBIC requires businesses with a turnover of <br /> ₹5 crore and above to mandatorily generate e-invoices starting 1 August,<br /> 2023. You will need software that will make this transition smoother. <br />Caliber Books is e-invoicing compliant and designed to adapt to GST requirements.</h2>

  <h2 className="into3">How Caliber Books simplifies e-invoicing</h2>
  <img src={calculator} alt="" className="intro2img" />

  <h3> <span className="quick">A quick and easy solution</span> <br /> <br /><span className="quick1">Caliber is a recognized GST Suvidha <br /> Provider, which means your  <br />invoices can be directly uploaded  <br />to the IRP without relying on <br />another GSP. </span></h3>
  <h3> <span className="smart">Smart validation </span> <br /> <br /> <span className="smart1">Caliber Books preemptively validates <br /> your data to identify violations, <br /> incorrect data entry, and missing <br /> mandatory fields.</span></h3>
  <h3>  <span className="gst">Multiple GSTINs </span> <br /> <br /> <span className="gst1"> Get complete visibility on the <br />transactions happening across all <br /> your branches with multiple GSTIN <br /> support from Caliber Books.</span></h3>
    <div className="ourservice">
        <h2 className="service">Our Services</h2> <br />
    <ul className="menu2"> 
        <li>Web Development</li>
        <li>E-invoicing</li>
        <li>Banking</li>
        <li>Blockchain</li> 
    </ul>
    </div> 
 
<div className="oursupport"> 
<h2 className="support">Support</h2> <br /> 
<ul className="menu3">
    <li>24/7 Anytime</li>
    <li>call at 911000000009</li>
    <li>Chat Assistance</li>
    <li>Query</li>
</ul> 


</div>
    </> 

    )   
       
}   
export default Home     