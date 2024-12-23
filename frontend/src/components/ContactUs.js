import React, { useState } from "react";
import axios from "axios";
import BackgroundImage from "../images/bgImage.avif";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/send-message', formData);
      if (response.data === 'Message sent successfully') {
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending your message.');
    }
  };

  return (
    <>
      <style jsx>{`
        ::placeholder {
          color: black;
        }
        input, textarea {
          color: black;
        }
      `}</style>
      <Navbar />
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-8 bg-black bg-opacity-60 rounded-lg w-full max-w-lg">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="mb-6">
              Have questions or comments? We would love to hear from you. Fill
              out the form below or reach out to us through our contact details.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-black font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded border border-gray-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-black font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded border border-gray-300"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-black font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full p-2 rounded border border-gray-300"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
