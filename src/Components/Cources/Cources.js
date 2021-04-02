import React from 'react';

import CourceDetail from '../CourceDetail/CourceDetail';
const Cources = ({cource,handleAddCource}) => {
   
    return (
        <div className="row container-fluid">
          {
            cource.map((cource)=>{
              return <CourceDetail key={cource._id} handleAddCource={handleAddCource} cource={cource}/>
            })
          }
        
        </div>
    );
};

export default Cources;