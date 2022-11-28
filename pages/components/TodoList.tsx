import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

type Task = {
    id: string, 
    value: string 
}

const TodoList = () => {
    const [newTodoText, setTodoText] = useState('')
    const [items,setItems] = useState<Task[]>([])

    const addItem = () => {
        if(!newTodoText) return;
        const item = {
            id: Math.floor(Math.random() * 1000).toString(),
            value: newTodoText
        }
    setItems((oldList: Task[]) => [...oldList, item])
    setTodoText('')
}

const deleteItem = (id: string) => {
const newArr = items.filter(item => item.id !== id)
setItems(newArr)
}


    return(
        <div>
        <h2>TODO</h2>
        <input type="text" placeholder="add todo" value={newTodoText} onChange={e => setTodoText(e.target.value)} />
        <button type='submit' onClick={() => {
            addItem()
        }}>Add</button>
        <ul>{items.map(item => {
            return <li key={item.id}>{item.value} <FontAwesomeIcon onClick={()=> deleteItem(item.id)} icon={faTrashCan} /> </li>
        })
    }</ul>
        </div>
    )
}

export default TodoList