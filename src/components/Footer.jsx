import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between mb-12">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <p className="text-gray-400 mb-4">1234 Street Name, City, State, 56789</p>
            <p className="text-gray-400 mb-4">Email: info@example.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

         

          {/* Newsletter */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to stay updated with the latest news and offers.</p>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 mb-4 rounded-md text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-gray-400">&copy; 2024 Your Somnath Dey All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
