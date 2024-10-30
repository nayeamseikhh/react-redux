import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        {name: 'Lenovo Laptop', id:1},
        {name: 'Asus Laptop', id:1},
        {name: 'Dell Laptop', id:1},
        {name: 'Hp Laptop', id:1},
        {name: 'Toshiba Laptop', id:1},
    ]
    return (
        <div>
            <h2>This is Shop</h2>
            {
                products.map(pd => <Product product = {pd}/>)
            }
        </div>
    );
};

export default Shop;