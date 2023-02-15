import React, {useState} from 'react'
let TotalItems = 0;

function Cart() {
    const [ items, setItems ] = useState([]);
    const [ total, setTotal ] = useState(0);

    const AddItem = item => {
        setItems( [...items, item] );
        TotalItems  = items.length
    }

    const CalculatePrice = item => {
        items.forEach(item => {
            setTotal(item.price)
        });
    }

    return;
}

export { Cart, TotalItems};