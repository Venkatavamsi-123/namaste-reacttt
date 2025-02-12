

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center space-y-4">

        {/* Restaurant Name & Tagline */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-red-500">SamudraRuchuluu</h3>
          <p className="text-gray-400">Freshly Made, Just for You</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-red-500 text-xl">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 text-xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 text-xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Quick Contact Info */}
        <div className="text-center text-gray-400 text-sm mt-4">
          <p>📞 Call us:7569447729</p>
          <p>📧 Email:venkatavamsi448@gmail.com</p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 mt-4 text-center text-gray-400 text-sm">
          <p>© 2025 SamudraRuchuluu. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
