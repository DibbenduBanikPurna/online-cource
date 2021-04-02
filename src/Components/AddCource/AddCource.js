import React from 'react';

const AddCource = (props) => {
    const cart=props.addCources
   
 
 let total=0;
 for(let i=0;i<cart.length;i++){
     let element=cart[i];
     
     total=total + element.price
 }
    return (
        <div  className="mt-5 pt-5 bg-dark vh-100 text-light text-left">
            <p>Cource Added :{props.addCources.length}</p>
            <p><strong>Total-Prize: ${total}</strong></p>
            <button className="btn btn-danger btn-lg">Confirm Order</button>
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