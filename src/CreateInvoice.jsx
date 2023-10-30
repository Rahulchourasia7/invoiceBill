import { useState } from "react"
import ClientDetails from "./components/ClientDetails"
import Footer from "./components/Footer"
import Headerr from "./components/Headerr"
import MainDetails from "./components/MainDetails"
import Notes from "./components/Notes"
import Table from "./components/Table"
import Dates from "./components/Dates"
import TableForm from "./components/TableForm"

 

function CreateInvoice() {
    const [showInvoice, setShowInvoice] = useState(true)
    const [name, setName] = useState("Rahul kumar")
    const [address, setAddress] = useState("4/22 dakshin")
    const [email, setEmail] = useState("rahulc25198@gmail.com")
    const [phone, setPhone] = useState("8770000000")
    const [bankName, setBankName] = useState("HDFC")
    const [bankAccount, setBankAccount] = useState("0786000000")
    const [website, setWebsite] = useState("http://localhost")
    const [clientName, setClientName] = useState("bobby")
    const [clientAddress, setClientAddress] = useState("saint naro")
    const [invoiceNumber, setInvoiceNumber] = useState("1009")
    const [invoiceDate, setInvoiceDate] = useState("20/09/2023")
    const [dueDate, setDueDate] = useState("21/09/2023")
    const [notes, setNotes] = useState("pay to bank account")
   const [description, setDescription] =useState("")
   const [quantity, setQuantity] = useState("")
   const [price, setPrice] = useState("")
   const [amount, setAmount] = useState("")
   const [list, setList] =useState([])
   const [total, setTotal] = useState(0)
    const handlePrint = () => {  
        window.print()   
    }
    return (
        <>
        <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl">
   {showInvoice ? <div>
<Headerr  handlePrint={handlePrint} /> 
<MainDetails name={name} address={address} />
<ClientDetails clientName={clientName} clientAddress={clientAddress} />
<Dates invoiceDate={invoiceDate} invoiceNumber={invoiceNumber} dueDate={dueDate} />
<Table description={description} quantity={quantity} price={price} amount={amount} list={list} setList={setList} total={total} setTotal={setTotal} />   
<Notes notes={notes} />   
<Footer name={name} 
address={address}
 website={website}   
  email={email}  
  phone={phone}
  bankAccount={bankAccount}
  bankName={bankName}
  />

<button onClick={() => setShowInvoice(false)} className=" mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500
transition-all duration-300">
        Edit information</button>
</div> : (
    <>
    {/* name,address,email, phonenumber,bank account, bank number, account holder,website clientname, clientaddress ,invoicenumber, invoicedate, duedate */}
   <div className="flex flex-col justify-center">
     {/* article1 */}
   <article className=" md:grid grid-cols-2 gap-10">
<div className="flex flex-col">
<label htmlFor="name"> your full name</label>
<input  
type="text" 
name="text" 
id="name"
 placeholder="Enter your name"
 autoComplete="off" 
 value={name}
 onChange={(e) => setName(e.target.value)}

 />
</div>

<div className="flex flex-col">
<label htmlFor="address">Enter your address</label>
   <input  
    type="address" 
    name="address" 
    id="address"
     placeholder="Enter your address"
     autoComplete="off" 
     value={address}
     onChange={(e) => setAddress(e.target.value)}
     />
</div>

     </article>

  {/* article2 */}

{/*  */}

  {/*  */}
<article className=" md:grid grid-cols-3 gap-10">
     
<div className="flex flex-col">
<label htmlFor="email">Enter your email</label>
   <input  
    type="email" 
    name="email" 
    id="email"
     placeholder="Enter your email"
     autoComplete="off" 
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     />
</div>

<div className="flex flex-col">
<label htmlFor="website">Enter your website</label>
   <input  
    type="url" 
    name="website" 
    id="website"
     placeholder="Enter your website"
     autoComplete="off" 
     value={website}
     onChange={(e) => setWebsite(e.target.value)}
     />
</div>


<div className="flex flex-col">
<label htmlFor="phone">Enter your phone</label>
   <input  
    type="text" 
    name="phone" 
    id="phone"
     placeholder="Enter your phone"
     autoComplete="off" 
     value={phone}
     onChange={(e) => setPhone(e.target.value)}
     />
</div>
</article>
{/* article2 end */}
{/*  */}



{/* article3 */}

<article className=" md:grid grid-cols-2 gap-10">
<div className="flex flex-col">
<label htmlFor="bankName">Enter your bank Name</label>
   <input  
    type="text" 
    name="bankName" 
    id="bankName"
     placeholder="Enter your bank Name"
     autoComplete="off" 
     value={bankName} 
     onChange={(e) => setBankName(e.target.value)}
     />
</div>
 <div className="flex flex-col">
 <label htmlFor="bankAccount">Enter your bank Account number</label>
   <input  
    type="text" 
    name="bankAccount" 
    id="bankAccount"
     placeholder="Enter your bank Account number"
     autoComplete="off" 
     value={bankAccount} 
     onChange={(e) => setBankAccount(e.target.value)}
     />
 </div>

</article>


{/* article 3 end */}
{/*  */}
{/**/}

{/* article4 */}
{/*  */}
<article className=" md:grid grid-cols-2 gap-10 md:mt-16" >
<div className="flex flex-col">
<label htmlFor="clientName">Enter your client Name</label>
   <input  
    type="text" 
    name="clientName" 
    id="clientName"
     placeholder="Enter your client Name"
     autoComplete="off" 
     value={clientName} 
     onChange={(e) => setClientName(e.target.value)}
     />
</div>

<div className="flex flex-col">
<label htmlFor="clientAddress">Enter your client Address</label>
   <input  
    type="text" 
    name="clientAddress" 
    id="clientAddress"
     placeholder="Enter your client Address"
     autoComplete="off" 
     value={clientAddress} 
     onChange={(e) => setClientAddress(e.target.value)}
     />

</div>





</article>

{/* article4 end */}
{/*  */}



{/* article5 */}

<article className=" md:grid grid-cols-3 gap-10 ">

<div className="flex flex-col">
<label htmlFor="invoiceNumber">Enter your invoice number</label>
   <input  
    type="text" 
    name="invoiceNumber" 
    id="invoiceNumber"
     placeholder="invoice number"
     autoComplete="off" 
     value={invoiceNumber} 
     onChange={(e) => setInvoiceNumber(e.target.value)}
     />
</div>


<div className="flex flex-col">
<label htmlFor="invoiceDate"> invoice Date</label>
   <input  
    type="date" 
    name="invoiceDate" 
    id="invoiceDate"
     placeholder="invoice Date"
     autoComplete="off" 
     value={invoiceDate} 
     onChange={(e) => setInvoiceDate(e.target.value)}
     />
</div>
 
 <div className="flex flex-col"> 
     
<label htmlFor="dueDate">Enter your Due Date</label>
   <input  
    type="date" 
    name="dueDate" 
    id="dueDate"
     placeholder="Due Date"
     autoComplete="off" 
     value={dueDate} 
     onChange={(e) => setDueDate(e.target.value)}
     />
 </div>

</article>
{/* */}

{/* tis is our table form */}

{/*  */}
<article>
   <TableForm 
   description={description}
    setDescription={setDescription}
    quantity={quantity}
    setQuantity={setQuantity}
    price={price}
    setPrice={setPrice} 
    amount={amount}
    setAmount={setAmount}
    list={list}
    setList={setList}  
    total={total} 
    setTotal={setTotal}
    />
</article>




<label htmlFor="notes">Enter your Notes</label>
<textarea
 name="notes" 
 id="notes"
  cols="30"
   rows="10"
    placeholder="Additional notes to the client"
     value={notes} onChange={(e) => setNotes(e.target.value)} ></textarea>


<button onClick={()=> setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500
     transition-all duration-300">
        Preview Invoice</button>
   </div>
    </> 
   
    
)}
        </main>
        
        </>
    ) 
   
}
export default CreateInvoice 