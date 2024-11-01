import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../redux/actions/cartAction';
import { connect } from 'react-redux';

const Shop = (props) => {
    const {products, addToCart} = props;
    return (
        <div>
            <h2>This is Shop</h2>
            {
                products.map(pd => 
                <Product 
                    product = {pd} 
                    key = {pd.id}  
                    addToCart = {addToCart}
                />)
            }
        </div>
    );
};
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = {
    addToCart:addToCart
}
//const connectToStore = connect(mapStateToProps, mapDispatchToProps);
//connect(mapStateToProps, mapDispatchToProps)(Shop);
export default connect( mapStateToProps, mapDispatchToProps) (Shop);