
import React ,{useState} from 'react'

 function Booking() {
    const[fullname,setfullname]=useState('')
    const[contact,setcontact]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[destination,setdestination]=useState('')
    const[Charges,setCharges]=useState('')
        
    const sendDate=(e)=>{
        e.preventDefault()
        console.log(fullname,contact,email,password,destination,Charges)
    }

  return (
   

    <center>
  <div>
    <form
      onSubmit={sendDate}
      style={{
        margin: "3rem auto",
        padding: "2rem",
        width: "40%",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
      }}
    >
      

      <label
        style={{
          display: "block",
          textAlign:'left',
          marginBottom: "0.5rem",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        Full Name:
      </label>
      <input
        type="text"
        placeholder="Enter the name"
        onChange={(e) => setfullname(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "0.2rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <label
        style={{
          display: "block",
          textAlign:'left',
          marginBottom: "0.5rem",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        Contact No:
      </label>
      <input
        type="text"
        onChange={(e) => setcontact(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "0.2rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <label
        style={{
          display: "block",
          textAlign:'left',
          marginBottom: "0.5rem",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        E-mail:
      </label>
      <input
        id="email"
        type="email"
        onChange={(e) => setemail(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "0.2rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <label
        style={{
          display: "block",
          textAlign:'left',
          marginBottom: "0.5rem",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        Password:
      </label>
      <input
        id="password"
        type="password"
        onChange={(e) => setpassword(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "0.2rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <label
        style={{
          display: "block",
          textAlign:'left',
          marginBottom: "0.5rem",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        Destination:
      </label>
      <input
        type="text"
        onChange={(e) => setdestination(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "0.2rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <label
        style={{
          display: "block",
          textAlign:'left',
          marginBottom: "0.5rem",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        Charges:
      </label>git status
      <input
        type="number"
        onChange={(e) => setCharges(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "0.2rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <input
        type="submit"
        value="Book"
        style={{
          display: "block",
          textAlign:'left',
          width: "100%",
          padding: "1rem",
          marginTop: "1rem",
          backgroundColor: "#3498db",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      />
    </form>
  </div>
</center>


)
}
export default Booking;
