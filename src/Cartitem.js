import React from "react";
class cartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price : 999,
            title : 'Mobile Phone',
            Qty : 1,
            image : 'https://img.freepik.com/free-photo/colorful-heart-air-balloon-shape-collection-concept-isolated-color-background-beautiful-heart-ball-event_90220-1047.jpg?size=626&ext=jpg&ga=GA1.1.1758758573.1683471146'

        } 
        // this.IncreaseQty= this.IncreaseQty.bind(this);
    }
   
    IncreaseQty =()=>{
        // console.log('this',this.state)
        this.setState({
            Qty:this.state.Qty+1
        }, ()=>{
            console.log(this.state);
        }) 
             
    }
    DecreaseQty = () =>{
        const {Qty} = this.state
        if(Qty === 0){
            return;
        }
        this.setState((prevState)=>{
           return{
            Qty:prevState.Qty-1
           } 
        })
    }
   
    render(){
          
        const{price,title,Qty,image} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <div style={styles.image}>
                    <img src="{image}"/>
                    </div>
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
                        onClick={this.IncreaseQty}
                        />
                        <img 
                        alt="Decrease" 
                        className="action-icons" 
                        src="https://img.freepik.com/free-icon/minus_318-933890.jpg?size=626&ext=jpg&ga=GA1.1.1758758573.1683471146&semt=sph"
                        onClick={this.DecreaseQty}
                        />
                        <img 
                        alt="Delete" 
                        className="action-icons" 
                        src="https://img.freepik.com/free-icon/delete_318-901546.jpg?size=626&ext=jpg&ga=GA1.1.1758758573.1683471146&semt=sph"/>
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

export default cartItem;