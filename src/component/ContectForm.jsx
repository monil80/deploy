import React from "react";
import { useState } from "react";

const ContectForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
 console.log();
  const sendForm = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    setSuccess(false);

    // Make an API call to submit the form data
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_PATH}/api/email/contect`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        }
      );

      const data = await response.json();
          setErrorMsg(data.msg); 

      if (data.status) {
       
      
        setSuccess(true);
      
      }
      else {
        setError(true);
        
      }

    

        setTimeout(() => {
          setError(false);
          setSuccess(false);
        }, 7000);
      
    } catch (error) {
       setErrorMsg("Error in Sending Message"); 
        console.error(error);
        setError(true);
      }
    

    setLoading(false);
      setTimeout(() => {
        setError(false);
        setSuccess(false);
      }, 10000);
    
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
     

   
  }

  return (
    <div>
      <form className="php-email-form" onSubmit={sendForm}>
        <div className="row gy-4">
          <div className="col-lg-6 form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (!/^[a-zA-Z\s\.]+$/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </div>
          <div className="col-lg-6 form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            onKeyDown={(e) => {
              if (!/^[a-zA-Z\s\.]+$/.test(e.key)) {
                e.preventDefault();
              }
            }}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="message"
            rows={5}
            placeholder="Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="my-3">
          {loading && <div className="message">Loading</div>}
          {error && <div className="message error">{errorMsg}</div>}
          {success && <div className="message success">{errorMsg}</div>}
        </div>
        <div className="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContectForm;
