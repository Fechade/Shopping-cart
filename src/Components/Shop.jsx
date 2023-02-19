import React from 'react';
import Item from './Item';

function Shop() {
    return(
        <div className='bg-black w-full h-full mt-5 flex flex-wrap'>
            <Item img='https://anandawira.github.io/shopping-cart/static/media/images02.3912e2fd.webp' price="19.99" title="NSWF Not sure for what Hoodie 
            -Black"  />
            <Item img='https://anandawira.github.io/shopping-cart/static/media/images04.d517b747.webp' price="29.99" title="NSWF I'm Fine Hoddie 
            -Black"  />
            <Item img='https://anandawira.github.io/shopping-cart/static/media/images03.c529d53c.webp'price="49.99" title="NSWF Hooded Fleece -Stacked
            -Grey"  />
        </div>
    )
     
}

export default Shop;