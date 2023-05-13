import React from "react";
import Cart from "./cart";
import Navbar from "./navbar"
import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app';

class App extends React.Component {
  constructor(){
    super();
   
    this.state = {
        products:[],
        loading:true        
 } 
 this.db=firebase.firestore();
}
componentDidMount(){
  this.db
  .collection('products')
  .onSnapshot((snapshot)=>{
    console.log(snapshot)  
    
    snapshot.docs.map((doc) => {
    console.log(doc.data())
    return null;
  });
  const products =  snapshot.docs.map((doc)=>{
    const data = doc.data();
    data['id'] = doc.id
    return data;
  });
    this.setState({
      products,
      loading: false
    })
  });


}


handleIncreaseQty=(product)=>{
    console.log('increase',product)
    const{products} = this.state;
    const index = products.indexOf(product);

    // products[index].Qty+=1;
    // this.setState({
    //     products
    // })

    const docDef= this.db.collection('products').doc(products[index].id);
    docDef
    .update({
      Qty:products[index].Qty+1
    })
    .then(()=>{
      console.log("updated Succesfully")
    })
    .catch((error)=>{
      console.log("error in updating",error);
    })
}
handleDecreaseQty=(product)=>{
    const{products} = this.state;
    const index = products.indexOf(product);
    
    if(products[index].Qty === 0){
        return;
    }
    // products[index].Qty -=1
   
    // this.setState({
    //     products
    // })
    const docDef= this.db.collection('products').doc(products[index].id);
    docDef
    .update({
      Qty:products[index].Qty-1
    })
    .then(()=>{
      console.log("updated Succesfully")
    })
    .catch((error)=>{
      console.log("error in updating",error);
    })
}
handleDelete=(id)=>{
    const {products} = this.state;
    const items = products.filter((item)=> item.id !== id);
    // this.setState({
    //     products:items
    // })
    const docDef= this.db.collection('products').doc(id);
    docDef
    .delete()
    .then(()=>{
      console.log("deleted Succesfully")
    })
    .catch((error)=>{
      console.log("error in updating",error);
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
    return "";
  });

  return cartTotal;
}
// addProduct = ()=>{
//   this.db
//   .collection('products')
//   .add({
//     image:'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
//     title:'Washing Machine',
//     Qty:1,
//     price:15999
//   })
//   .then((docRef)=>{
//     console.log('product as benn added',docRef)
//   })
//   .catch((error)=>{
//     console.log('error while adding:',error)
//   });
// }

render(){
  const{products,loading}= this.state
  return (
    <>
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      {/* <button onClick={this.addProduct} style={{padding:20}}>Add Product</button> */}
      <Cart
      products={products}
      IncreaseQty={this.handleIncreaseQty}
      DecreaseQty={this.handleDecreaseQty}
      Delete={this.handleDelete}
      />
      {loading && <h1>Loading Products...</h1>}
    <div style={{padding:20,fontSize:30}}>Total:{this.getTotalCartPrice()}</div>
    </div>
    </>
  );
}
  
}


export default App;
