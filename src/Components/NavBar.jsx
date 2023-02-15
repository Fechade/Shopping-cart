import React from "react";
import { Link } from "react-router-dom";
import { TotalItems } from "./Cart";

export default function Nav() {
  return (
    <div className="bg-black p-6 text-white">
      <ul className="nav-links flex justify-between pl-15 pr-20 items-center">
        <div className="logo">
          <Link className="text-5xl" to="/">
            LOGO SHOP
          </Link>
        </div>
        <div className="space-x-20 text-3xl">
         <button>
            <Link className="effect" to="/">Home</Link>
         </button>
         <button>
          <Link className="effect" to="/shop">Shop</Link>
         </button>
        </div>
        <div className="cart">
          <Link to="/cart" className="flex">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 576 512"
              id="cartIcon"
              height="1.7em"
              width="1.7em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
            </svg>
            { TotalItems }
          </Link>
        </div>
      </ul>
    </div>
  );
}
