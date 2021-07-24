import React,{useEffect} from 'react'

const Cart = (props) => {
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]): 1;

    /*
    useEffect(() => {
        if (productId)
            dispatch (addToCart(productId,qty))
        
    }, [])
*/
    return (
        <div>
            <h1>Hello from CART</h1>
            <h2>{productId}</h2>
            <h2>{qty}</h2>
        </div>
    )
}


export default Cart

