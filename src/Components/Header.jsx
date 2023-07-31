import React from "react";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center pl-4 pr-4 p-5 bg-blue-600 text-white">
        <div>
          <h2>Pric.</h2>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>Contact</li>
            <li>About us</li>
            <li>Register</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
