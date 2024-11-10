import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul>
              <li>Phone: (92) +3412231142</li>
              <li>Email: itxharoonkhan@gmail.com</li>
              <li>Address: Future Colony Landhi Kaeachi</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

         
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and promotions.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <button className="w-full py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Company Haroon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
