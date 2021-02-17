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
    <div className="App">
     
     <div className="cource">
     {cource.map(cource=>{
       return <Cources key={cource._id} handleAddCource={handleAddCource} cource={cource}/>
     })}

     </div>
     <div>
    
     </div>
      <AddCource addCources={addCources}/> 
    </div>
  );
}

export default App;
