
import { useEffect, useState } from 'react';

export function WorkPreview({ el,onAdd }) {
    const [todo, setTodo] = useState('')
    

    const handleChnge = (e) => {
        setTodo(e.target.value);
    }

    const onSubmit = () => {
        el.preference.push(todo)
    }

    return (
        <div className="worker-preview">
            <h1>{el.name}</h1>
            <input type="text" value={todo} name="todo" onChange={(e) => handleChnge(e)} />
            <button onClick={()=>onAdd(todo)}>Add</button>
        </div>
    )
}
