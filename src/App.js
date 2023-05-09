import React from "react";
import Cart from "./cart";
import Navbar from "./navbar"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products:[ 
    {
        price : 999,
        title : 'Mobile Phone',
        Qty : 3,
        image : 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        id:1   
   },{
    price : 99,
    title : 'Watch',
    Qty : 4,
    image : 'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    id:2   
   },{
    price : 9999,
    title : 'Laptop',
    Qty : 1,
    image : 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
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

getCartCount =()=>{
  const {products} = this.state
  let count = 0

  products.forEach((product)=>{
    count += product.Qty;
  })

  return count;
}

getTotalCartPrice=()=>{
  const{products} = this.state;
  let cartTotal = 0

  products.map((product) =>{
    cartTotal = cartTotal+  product.Qty * product.price
  });

  return cartTotal;
}
render(){
  const{products}= this.state
  return (
    <>
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      products={products}
      IncreaseQty={this.handleIncreaseQty}
      DecreaseQty={this.handleDecreaseQty}
      Delete={this.handleDelete}
      />
    <div style={{padding:20,fontSize:30}}>Total:{this.getTotalCartPrice()}</div>
    </div>
    </>
  );
}
  
}


export default App;
