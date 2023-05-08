import React from "react";
import CartItem from './Cartitem'

class cart extends React.Component{
constructor(){
    super();
    this.state = {
        products:[ 
    {
        price : 999,
        title : 'Mobile Phone',
        Qty : 3,
        image : '',
        id:1   
   },{
    price : 99,
    title : 'Watch',
    Qty : 4,
    image : '',
    id:2   
   },{
    price : 9999,
    title : 'Laptop',
    Qty : 1,
    image : '',
    id:3   
   }
]         
 }
}
handleIncreaseQty=(product)=>{
    console.log('increase',product)
    const{products} = this.state;
    const index = products.indexOf(product);

    products[index].Qty+=1;
    this.setState({
        products
    })
}
handleDecreaseQty=(product)=>{
    const{products} = this.state;
    const index = products.indexOf(product);
    
    if(products[index].Qty === 0){
        return;
    }
    products[index].Qty -=1
   
    this.setState({
        products
    })
}
handleDelete=(id)=>{
    const {products} = this.state;
    const items = products.filter((item)=> item.id !== id);
    this.setState({
        products:items
    })
}
render(){
    const{ products } = this.state
    return(
    <div className="cart">
        {products.map((product)=>{
            return(
                <CartItem 
                product={product} 
                key={product.id}
                IncreaseQty={this.handleIncreaseQty}
                DecreaseQty={this.handleDecreaseQty}
                Delete={this.handleDelete}
                />  
        )
          
        })}
        
    </div>
    );

 }

}

export default cart;