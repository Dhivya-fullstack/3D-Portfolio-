import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import Alert from '../components/Alert';
import useAlert from '../hooks/useAlert';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const {showAlert,alert, hideAlert} = useAlert();


  const handleChange = ({ target:{ name, value } }) => {
    setForm((currForm) => {
      return {
        ...currForm,
        [name]: value,
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
  'service_pulj13u',
  'template_xtcpbxe',
  formRef.current,
  'ydlrz_PVZB2x9PIsm'
)
    /*emailjs.sendForm('service_pulj13u', 'template_xtcpbxe', 
      {
     from_name: form.name,
     to_name: 'Dhivya',
     from_email: form.email,
     to_email: 'dhivyajayakumar@outlook.com',
    },'ydlrz_PVZB2x9PIsm'
  )*/
    .then(() => {
      setLoading(false);
      showAlert({show: true,
                 text: "Message sent successfully!", 
                 type: "success"});
      setTimeout(() => {
        hideAlert(false);
        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, 3000);
    }).catch((error) => {
      setLoading(false);
      console.error(error);
      showAlert({show: true,
                 text: "Failed to send message. Please try again later.", 
                 type: "danger"});
      });
     }
  
  return (
  <section className="relative flex lg:flex-row flex-col max-container">
    {alert.show && <Alert {...alert} />}

  <div className="flex-1 min-w-[50%] flex flex-col">
    <h1 className="head-text">Get in Touch</h1>
    <form ref={formRef}
    onSubmit={handleSubmit}
    className ="w-full flex flex-col gap-7 mt-14"
    >
      <label className="text-black-500 font-semibold">
        Name
        <input type="text"
          name="name"
          className="input"
          placeholder="John"
          required value ={form.name}
          onChange={handleChange}
          />
      </label>
      <label className="text-black-500 font-semibold">
        Email
        <input type="email"
          name="email"
          className="input"
          placeholder="john@example.com"
          required value ={form.email}
          onChange={handleChange}
          />

      </label>
      <label className="text-black-500 font-semibold">
        Your Message
        <textarea type="text"
          name="message"
          rows="4"
          className="textarea"
          placeholder="Your thoughts here..."
          required value ={form.message}
          onChange={handleChange}
          />
      </label>
      <button type="submit" className="btn " disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
    </form>    
    </div>
    <div> </div>
  </section>
    
);
}


export default Contact