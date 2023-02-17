import React, { useState } from "react";
import { Link } from "react-router-dom";

class item {
  constructor(img, title, price) {
    (this.img = img), (this.title = title);
    this.price = price;
  }
}

function Item({ img, title, price }) {
  /**we probably want to recive the properties of the item here to then display them */
  const Item = new item(img, title, price);

  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((quantity) => ++quantity);
  const decreaseQty = () => setQuantity((quantity) => --quantity);

  return (
    <div className="bg-black w-72 text-left text-3xl flex justify-center flex-col ml-5 mr-5  mt-10">
      <Link to="/item">
        <img className="h-64 w-64 m-auto" src={img} />
        <h1 className="mt-2">{title}</h1>
        <p className="mt-10">${price}</p>
        {/* <input type="button" value="-" class="minus" onClick={increaseQty}/>
            <input type="number" step="1" min="1" max="" name="quantity" value={quantity} title="Qty" size="4" />
            <input type="button" value="+" class="plus" onClick={decreaseQty}/> */}
      </Link>
    </div>
  );
}

export default Item;
