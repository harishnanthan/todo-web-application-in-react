import TodoInput from "./TodoInput";
import React, { useState } from "react";

export default function InputField() {

    const [todoArray, setTodoArray] = useState({
        todoItem: "",
    });

    const [array, setArray] = useState([])

    function changeHandler(e) {
        setTodoArray(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    function submitHandler(e) {
        e.preventDefault()
        setArray(prevState => {
            return [...prevState, todoArray.todoItem]
        })
    }

    const allItems = array.map(item => <TodoInput key={item} item={item} />)
    // console.log(todoArray)
    return (
        <div>
            <div className="input_field">
                <form onSubmit={submitHandler}>
                    <div className="input_field_circule"></div>
                    <input id="t1" type='text'
                        placeholder="Create a new todo.."
                        name="todoItem"
                        onChange={changeHandler}
                        value={todoArray.todoItem}
                        autoComplete="off"
                        required
                    />
                </form>
            </div>
            {allItems}
        </div >
    )
}