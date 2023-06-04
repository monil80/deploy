import React, { useState } from "react";

const QuoteForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);


  
   const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  
 

  const handleSubmit = async (e) => {
        e.preventDefault();

    setLoading1(true);
       // Make an API call to submit the form data
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_PATH}/api/email/quote`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
           phone,
            message,
          }),
        }
      );

      const data = await response.json();
         
          setErrorMsg(data.msg); 

      if (data.status) {
       
        setLoading1(false);
        setSuccess(true);
      
      }
      else {
        setLoading1(false);
        setError(true);
        
      }

    

        setTimeout(() => {
          setError(false);
          setSuccess(false);
        }, 7000);
      
    } catch (error) {
        setLoading1(false);
       setErrorMsg("Error in Sending Quotation "); 
        console.error(error);
        setError(true);
      }
    

    setLoading1(false);
      setTimeout(() => {
        setError(false);
        setSuccess(false);
      }, 10000);
    
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
     

   
 
   
    
  };

  return (
    <form onSubmit={handleSubmit} className="php-email-form">
      <h3>Get a quote</h3>
      <p>
        To get a quote for Aura Elevator, please provide more information about
        the project such as the scope of work, the features required, the
        timeline, and any other relevant details. This will allow me to assist
        you better in providing an accurate quote for your project.
      </p>
      <div className="row gy-3">
        <div className="col-md-12">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="form-control"
            placeholder="Name"
            required
            onKeyDown={(e) => {
              if (!/^[a-zA-Z\s\.]+$/.test(e.key)) {
                e.preventDefault();
              }
            }}
          />
        </div>
        <div className="col-md-12 ">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="form-control"
            placeholder="Phone"
            maxLength={10}
            required
            onKeyDown={(e) => {
              if (!/^[0-9]+$/.test(e.key) && e.key !== "Backspace") {
                e.preventDefault();
              }
            }}
            minLength={10}
          />
        </div>
        <div className="col-md-12">
          <textarea
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="form-control noResize"
            rows={6}
            placeholder="Message"
            required
          />
        </div>

        <div className="my-3">
          {loading1 && <div className="message">Loading</div>}
          {error && <div className="message error">{errorMsg}</div>}
          {success && <div className="message success">{errorMsg}</div>}
        </div>
        <div className="col-md-12 text-center">
          <button type="submit" disabled={loading1}>
            Get a quote
          </button>
        </div>
      </div>
    </form>
  );
}

export default QuoteForm;
