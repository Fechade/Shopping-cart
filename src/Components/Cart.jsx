import React, { useState } from "react";
let TotalItems = 0;

function Cart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const AddItem = (item) => {
    setItems([...items, item]);
    TotalItems = items.length;
  };

  const CalculatePrice = (item) => {
    items.forEach((item) => {
      setTotal(item.price);
    });
  };

  return (
    <div>
      {TotalItems >= 0 && (
        <h1 className="text-center text-7xl">You cart is empty!</h1>
      )}
    </div>
  );
}

export { Cart, TotalItems };
