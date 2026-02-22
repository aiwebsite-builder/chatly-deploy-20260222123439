import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#EDE8E0] py-16 md:py-20 text-[#3D3D3D] border-t border-[#E0DBD3]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <h3 className="text-3xl font-bold text-[#1A1A1A] mb-4">Meridian</h3>
          <p className="text-md leading-relaxed max-w-sm">
            Crafting digital excellence with precision and passion. Your vision, our expertise.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#1A1A1A] mb-6">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-[#3D3D3D] hover:text-[#1A3A2A] transition-colors duration-200">About Us</a></li>
            <li><a href="#" className="text-[#3D3D3D] hover:text-[#1A3A2A] transition-colors duration-200">Services</a></li>
            <li><a href="#" className="text-[#3D3D3D] hover:text-[#1A3A2A] transition-colors duration-200">Careers</a></li>
            <li><a href="#" className="text-[#3D3D3D] hover:text-[#1A3A2A] transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#1A1A1A] mb-6">Resources</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-[#3D3D3D] hover:text-[#1A3A2A] transition-colors duration-200">Blog</a></li>
            <li><a href="#" className="text-[#3D3D3D] hover:text-[#1A3A2A] transition-colors duration-200">Support</a></li>
            <li><a href="#" className="text-[#3D3D3D] hover:text-[#1A3A2A] transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="text-[#3D3D3D] hover:text-[#1A3A2A] transition-colors duration-200">Terms of Service</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h4 className="text-lg font-semibold text-[#1A1A1A] mb-6">Connect</h4>
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#3D3D3D] hover:text-[#1A3A2A] transition-colors duration-200">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#3D3D3D] hover:text-[#1A3A2A] transition-colors duration-200">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#3D3D3D] hover:text-[#1A3A2A] transition-colors duration-200">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 text-center border-t border-[#E0DBD3] pt-8 text-sm text-[#8A8A7A]">
        © {new Date().getFullYear()} Meridian. All rights reserved.
      </div>
    </footer>
  );
}
