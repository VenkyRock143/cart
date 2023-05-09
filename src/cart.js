import React from "react";
import CartItem from './Cartitem'

const cart =(props)=>{
    const{ products } = props
    return(
    <div className="cart">
        {products.map((product)=>{
            return(
                <CartItem 
                product={product} 
                key={product.id}
                IncreaseQty={props.IncreaseQty}
                DecreaseQty={props.DecreaseQty}
                Delete={props.Delete}
                />  
        )
          
        })}
        
    </div>
    );

 }

export default cart;