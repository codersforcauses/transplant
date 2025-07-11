import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] p-4 text-center text-white">
      <p>Transplant Australia &copy; {new Date().getFullYear()}</p>
      <div className="mt-2">
        <a href="#" className="mx-2">
          Privacy Policy
        </a>
        <a href="#" className="mx-2">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
