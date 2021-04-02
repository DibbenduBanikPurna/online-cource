import React from 'react';

const CourceDetail = ({cource,handleAddCource}) => {
    return (
        <div className="col-md-3">
            <div className="card mt-5 pt-5">
            <img style={{height:'150px'}} className="img-fluid" src={cource.picture} alt=""/>
               <div style={{height:'200px'}} className="card-body text-light pb-5">
                    
                        <h5 className="text-primary">{cource.name}</h5>
                        <p style={{color:'#000080'}} >cource by:{cource.teacher}</p>
                       
                        <h5 className="text-muted">price:{cource.price}<span className="text-secondary">$ </span></h5>
                        
                        <button onClick={()=>handleAddCource(cource)} className="btn btn-danger">Enroll Now</button>
                    
                   </div> 
            </div>
            
        </div>
    );
};

export default CourceDetail;