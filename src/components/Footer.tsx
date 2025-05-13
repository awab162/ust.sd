
import React from 'react';
import { Facebook, Twitter, Linkedin, Home } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About us</h3>
            <p className="text-gray-300 mb-4">
              We are a team of passionate people whose goal is to improve everyone's life through disruptive products. 
              We build great products to solve your business problems.
            </p>
            <p className="text-gray-300">
              Our products are designed for small to medium size companies willing to optimize their performance.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
            <ul className="space-y-2 footer-links">
              <li className="flex items-center"><span className="inline-block w-4 h-4 mr-2">📧</span> <a href="mailto:info@ust.edu.sd">Contact us</a></li>
              <li className="flex items-center"><span className="inline-block w-4 h-4 mr-2">📩</span> <a href="mailto:info@ust.edu.sd">info@ust.edu.sd</a></li>
              <li className="flex items-center"><span className="inline-block w-4 h-4 mr-2">📞</span> <a href="tel:+15555555555">+1 555-555-5555</a></li>
            </ul>
            
            <div className="flex space-x-2 mt-4">
              <a href="#" className="social-icon text-blue-600"><Facebook size={20} /></a>
              <a href="#" className="social-icon text-blue-400"><Twitter size={20} /></a>
              <a href="#" className="social-icon text-blue-700"><Linkedin size={20} /></a>
              <a href="#" className="social-icon text-gray-800"><Home size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 py-6 text-sm text-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>Copyright © University of Science and Technology</p>
            <p>Powered by <span className="font-bold">UST</span> - Create a <a href="https://www.odoo.com/app/website?utm_source=db&utm_medium=website" className="text-blue-400">free website</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
