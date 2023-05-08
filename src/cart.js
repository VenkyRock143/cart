import React from "react";
import CartItem from './Cartitem'

class cart extends React.Component{
    render(){
        return(
            <div className="App">
            <CartItem/>
            <CartItem/>
            <CartItem/>
            </div>
        );

    }

}

export default cart;