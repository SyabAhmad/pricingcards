import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center pl-4 pr-4 p-5 bg-blue-600 text-white">
        <div>
          <h2>
            {" "}
            <Link href="/">Pric.</Link>
          </h2>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/aboutus">About us</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
