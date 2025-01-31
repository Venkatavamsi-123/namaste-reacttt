import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent successfully!');
    // Handle form submission (e.g., send to backend)
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-800 text-white flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Effect: Animated Gradient with Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-800 opacity-40 z-0 animate-pulse"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row gap-12 px-4 sm:px-6 lg:px-16 py-8">
        {/* Left Side - Contact Info */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 transition-all duration-300 hover:scale-105">
            Reach Out to Us
          </h2>
          <p className="text-lg sm:text-xl mb-8 font-semibold text-gray-300">
            Have any questions or need assistance? Our team is here to help you.
          </p>

          <div className="space-y-6">
            <div className="flex items-center justify-center lg:justify-start space-x-4 hover:scale-105 transition-all duration-300 hover:shadow-lg p-6 rounded-xl bg-gray-800 cursor-pointer">
              <FaPhoneAlt size={40} className="text-pink-500 hover:text-pink-700 transition-all duration-300" />
              <div>
                <h3 className="text-2xl font-semibold">Call Us</h3>
                <p className="text-lg">+91 7569447729</p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-4 hover:scale-105 transition-all duration-300 hover:shadow-lg p-6 rounded-xl bg-gray-800 cursor-pointer">
              <FaEnvelope size={40} className="text-yellow-400 hover:text-yellow-500 transition-all duration-300" />
              <div>
                <h3 className="text-2xl font-semibold">Email Us</h3>
                <p className="text-lg">Venkatavamsi448@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 transition-all duration-300"
                    placeholder="Your Full Name"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 transition-all duration-300"
                    placeholder="Your Email Address"
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full p-4 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 transition-all duration-300"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-600 flex items-center justify-center"
                  >
                    <FaPaperPlane className="inline-block mr-3" />
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
