import React, { useState } from 'react';
import './App.css';
import {Data} from './Components/Data/Data'
import Cources from './Components/Cources/Cources'
import AddCource from './Components/AddCource/AddCource'
function App() {
  const [cource,setCource]=useState(Data)
  const [addCources,setAddCource]=useState([])
  const handleAddCource=(cource)=>{
    setAddCource([...addCources,cource])
   
  }
  return (
    <section className="container App">

    
    <div className="row">
     
     <div className="col-md-10">
       <div className="row">
       
        <Cources cource={cource} handleAddCource={handleAddCource} /> 
    

       </div>
    

     </div>
     <div className="col-md-2">
    
     
      <AddCource addCources={addCources}/> 
      </div>
    </div>
    </section>
  );
}

export default App;
