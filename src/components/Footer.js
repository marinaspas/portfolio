import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="legal">Copyright &copy; Marina Spasovska {currentYear} </p>
    </footer>
  );
}

export default Footer;
