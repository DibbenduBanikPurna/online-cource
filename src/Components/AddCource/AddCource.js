import React from 'react';

const AddCource = (props) => {
    const cart=props.addCources
   
 
 let total=0;
 for(let i=0;i<cart.length;i++){
     let element=cart[i];
     
     total=total + element.price
 }
    return (
        <div>
            <h5>Cource Added :{props.addCources.length}</h5>
            <p><strong>Total-Prize: ${total}</strong></p>
            <button className="btn btn-danger">Confirm Order</button>
            <hr/>
            <h5>Selected Cource</h5>
            {
                cart.map(cart=>{
                    return <ol key={cart._id}>{cart.name}</ol>
                })
            }
        </div>
    );
};

export default AddCource;