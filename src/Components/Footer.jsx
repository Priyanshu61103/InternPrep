import React from "react";

const Footer = () => {
  return (
    <div className="h-100 w-full bg-gray-800 text-gray-200 items-center pt-10">
      <div>
        <div className="h-1 w-300 bg-gray-200 mb-5 rounded-full relative left-20 top-10"></div>
      </div>
      <div className="w-300 flex justify-around">
        <div className="relative top-15 left-20 font-sans">
          <h1 className="text-2xl text-gray-200 font-bold mb-5">Quick Links</h1>
          <p>About Us</p>
          <p>Services</p>
          <p>Blog</p>
          <p>Privacy Policy</p>
        </div>
        <div className="relative top-15 left-20 font-sans">
          <h1 className="text-2xl text-gray-200 font-bold mb-5">Contact Information</h1>
          <p>internprep1234@gmail.com</p>
          <p>internprep5678@gmail.com</p>
          <p>Blog</p>
          <p>Privacy Policy</p>
        </div>
        <div className="relative top-15 left-20 font-sans">
          <h1 className="text-2xl text-gray-200 font-bold mb-5">Social Media</h1>
          <div className="flex gap-x-4">
            <a href="https://www.facebook.com/"><img src="../facebook-icon.png" alt="" className="h-10 w-10"/></a>
            <a href="https://x.com/"><img src="../x_icon.png" alt="" className="h-10 w-15"/></a>
            <a href="https://www.instagram.com/"><img src="../instagram.png" alt="" className="h-10 w-10"/></a>
            <a href="https://www.linkedin.com/"><img src="../linkedin.webp" alt="" className="h-10 w-10"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
