import React from 'react';

const Product = (props) => {
    const {name, id} = props.product
    return (
        <div style={{border: '1px solid gray', margin: '5px', textAlign:'center'}}>
            <h5>{name}</h5>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;