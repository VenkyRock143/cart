import React from "react";
import CartItem from "./Cartitem";

function App() {
  function showAlert(){
    alert("Hello!")
  }
  function handleInputChange(e){
    console.log(e.target.value);
  }
  return (
    <>
    <div className="App">
      <h2>Cart</h2>
      <CartItem/>
    </div>
    <div className="App">
      <button onClick={showAlert}>showAlert</button>
      <input onChange = {handleInputChange}/>
    </div>
    </>
  );
}


export default App;
