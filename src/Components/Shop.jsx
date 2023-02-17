import React from 'react';
import Item from './Item';
import item from '../assets/Captura.jpg'
import itemtwo from '../assets/Captura2.jpg'
import itemthree from '../assets/Captura3.jpg'
import itemfour from '../assets/Captura4.jpg'

function Shop() {
    return(
        <div className='bg-black w-full h-full mt-5 flex flex-wrap'>
            <Item img={item} price="99.99" title="NSWF SnapBack Hat"  />
            <Item img={itemtwo} price="19.99" title="NSWF Not sure for what Hoodie 
            -Black"  />
            <Item img={itemthree} price="29.99" title="NSWF I'm Fine Hoddie 
            -Black"  />
            <Item img={itemfour} price="49.99" title="NSWF Hooded Fleece -Stacked
            -Grey"  />
        </div>
    )
     
}

export default Shop;