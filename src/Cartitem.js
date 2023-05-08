import React from "react";

class CartItem extends React.Component {
    //trying to code in syncronous
    // testing(){
    //     const promise = new Promise((resolve,reject)=>{
    //         setTimeout(() =>{
    //             resolve('done')
    //         },1000);
    //     })
    //     promise.then(()=>{
    //         this.setState({Qty:this.state.Qty+10});
    //         this.setState({Qty:this.state.Qty+10});
    //         console.log('state',this.state)
    //     });
    // }
   
    // IncreaseQty =()=>{
    //     // console.log('this',this.state)
    //     this.setState({
    //         Qty:this.state.Qty+1
    //     }, ()=>{
    //         console.log(this.state);
    //     }) 
             
    // }
    // DecreaseQty = () =>{
    //     const {Qty} = this.state
    //     if(Qty === 0){
    //         return;
    //     }
    //     this.setState((prevState)=>{
    //        return{
    //         Qty:prevState.Qty-1
    //        } 
    //     }, ()=>{
    //         console.log(this.state);
    //     })
    // }
   
    render(){
          
        // const{price,title,Qty,image} = this.state;
        console.log('this.props', this.props);
        const{price,title,Qty,image} = this.props.product;
        const{product,IncreaseQty,DecreaseQty,Delete} = this.props;
        return(
            <div className="cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img style={styles.image}/>    
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: 'blue'}}>RS {price}</div>
                    <div style={{color: 'blue'}}>Qty: {Qty}</div>
                    <div className="cart-item-actions">
                        {/* Button */}
                        <img 
                        alt="Increase" 
                        className="action-icons" 
                        src="https://img.freepik.com/free-icon/add_318-932318.jpg?size=626&ext=jpg&ga=GA1.1.1758758573.1683471146&semt=sph" 
                        onClick={()=>IncreaseQty(product)}
                        />
                        <img 
                        alt="Decrease" 
                        className="action-icons" 
                        src="https://img.freepik.com/free-icon/minus_318-933890.jpg?size=626&ext=jpg&ga=GA1.1.1758758573.1683471146&semt=sph"
                        onClick={()=>DecreaseQty(product)}
                        />
                        <img 
                        alt="Delete" 
                        className="action-icons" 
                        src="https://img.freepik.com/free-icon/delete_318-901546.jpg?size=626&ext=jpg&ga=GA1.1.1758758573.1683471146&semt=sph"
                        onClick={()=>Delete(product.id)} />                  
                   </div>
                </div>
            </div>
        );
    }
}

const styles = {
   image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'grey'
    }
}

export default CartItem;