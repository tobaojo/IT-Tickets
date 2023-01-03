import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState, useReducer } from "react"
import classes from "./TodoList.module.css"
import themeClasses from '../../styles/theme.module.css'
import darkthemeClasses from '../../styles/darktheme.module.css'
import cn from "classnames"
import classNames from "classnames"

type Task = {
    id: string,
    value: string
}

type TodoState = Task[]


type AddItemAction = {
    type: 'addItem'
    item: Task
}

type DeleteItemAction = {
    type: 'deleteItem'
    id: string
}

type TodoAction = AddItemAction | DeleteItemAction

const TodoList = () => {
    const [newTodoText, setTodoText] = useState('')


    const reducer = (state: TodoState, action: TodoAction) => {
        switch (action.type) {
            case 'addItem':
                return [...state, action.item]
            case 'deleteItem':
                return state.filter((task) => task.id !== action.id)
        }

    }

    const [state, dispatch] = useReducer(reducer, [])

    const addItem = () => {
        if (!newTodoText) return;
        const item = {
            id: Math.floor(Math.random() * 1000).toString(),
            value: newTodoText
        }
        dispatch({type: 'addItem', item})
        setTodoText('')
    }
    const deleteItem = (id: string) => {
        dispatch({type:'deleteItem', id})
    }

    const isDarkTheme = false
    return (
        <div>
            <h2 className={cn({ [themeClasses.colorScheme]: !isDarkTheme, [darkthemeClasses.colorScheme]: isDarkTheme }, classes.heading)}>TODO</h2>
            <input className={classes.todoInput} type="text" placeholder="Add ToDo" value={newTodoText} onChange={e => setTodoText(e.target.value)} />
            <button className={classes.addBtn} type='submit' onClick={() => { addItem() }}>Add</button>
            <ul>{state.map(item => {
                return <li className={classes.todoItem} key={item.id}>{item.value} <FontAwesomeIcon className={cn(classes.trashcan, classes.hide)} onClick={() => deleteItem(item.id)} icon={faTrashCan} /> </li>
            })
            }</ul>
        </div>
    )
}

export default TodoList
