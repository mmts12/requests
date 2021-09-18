import { useEffect, useState } from 'react';
import './App.css';
import { WorkPreview } from './cmp/WorkPreview';
import {workService} from './service'

function App() {
const [workDays,setWorkDays] = useState(null);

useEffect(() => {
  setWorkDays(workService.getData());
},[]);

const onAdd = (todo) => {
  const workDaysCopy = {...workDays};
  
}

if(!workDays) return <h1>Loading...</h1>
console.log(workDays)
  return (
    <section>
    <h1 className="main-header">project 1</h1>
    <div className="workers-container">
      {workDays.map((el)=><WorkPreview key={el.id} onAdd={onAdd} el={el}/>)}
    </div>
    </section>
    
  )
}

export default App;
