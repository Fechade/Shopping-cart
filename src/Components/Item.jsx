import React from 'react';

class item {
    constructor(img, title, price) {
        this.img = img,
        this.title = title
        this.price = price
    }
}

function Item( {img, title, price} ) {/**we probably want to recive the properties of the item here to then display them */
    const Item = new item(img, title, price);

    const [ quantity, setQuantity ] = useState(1);

    const increaseQty = () => setQuantity(quantity => ++quantity)
    const decreaseQty = () => setQuantity(quantity => --quantity)

    return(
        <>
            <img src={img} />
            <h1>{title}</h1>
            <p>{price}</p>
            <input type="button" value="-" class="minus" onClick={increaseQty}/>
            <input type="number" step="1" min="1" max="" name="quantity" value={quantity} title="Qty" size="4" />
            <input type="button" value="+" class="plus" onClick={decreaseQty}/>
        </>
    );
}

export default Item;