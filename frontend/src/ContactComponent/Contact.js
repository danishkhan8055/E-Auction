import './Contact.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all fields');
      return;
    }
    toast.success('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <ToastContainer />

      <div className="contact-header">
        <h1 className="contact-title">Welcome to <span className="highlight">eAuction</span></h1>
        <h4 className="contact-subtitle">Contact Page</h4>
        <p className="contact-description">
          Have a question, concern, or just want to say hello? Reach out to us using the form below.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-input"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="contact-input"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="contact-textarea"
          rows="5"
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
