import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import classes from "./TodoList.module.css"
import themeClasses from '../../styles/theme.module.css'
import darkthemeClasses from '../../styles/darktheme.module.css'
import cn from "classnames"
import classNames from "classnames"

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

    const isDarkTheme = false
    return(
        <div>
        <h2 className={cn({[themeClasses.colorScheme]:!isDarkTheme, [darkthemeClasses.colorScheme]:isDarkTheme}, classes.heading)}>TODO</h2>
        <input className={classes.todoInput} type="text" placeholder="Add To                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Do" value={newTodoText} onChange={e => setTodoText(e.target.value)} />
        <button className={classes.addBtn} type='submit' onClick={() => { addItem()}}>Add</button>
        <ul>{items.map(item => {
            return <li className={classes.todoItem} key={item.id}>{item.value} <FontAwesomeIcon className={cn(classes.trashcan, classes.hide)} onClick={()=> deleteItem(item.id)} icon={faTrashCan} /> </li>
        })
    }</ul>
        </div>
    )
}

export default TodoList
