import React, { useState } from "react"
import closeIcon from "../images/icon-cross.svg"
import tickIcon from "../images/icon-check.svg"

export default function TodoInput(props) {
    // console.log(props)
    const [show, setShow] = useState(false)
    const [normal, setNormal] = useState(false)
    const [close, setClose] = useState(true)

    var display = {
        display: "block"
    }
    var noDisplay = {
        display: "none"
    }

    var textChange = {
        "color": "hsl(234, 11%, 52%)",
        textDecoration: "line-through"
    }
    var noTextChange = {
        "color": "hsl(234, 39%, 85%)",
        textDecoration: "none"
    }

    var bgColor = {
        background: "linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%))",
        border: "2px solid hsl(192, 100%, 67%)"
    }

    var noBgColor = {
        backgroundColor: "transparent"
    }

    function changeHandler() {
        setNormal(preState => !preState)
    }

    function showHandler() {
        setClose(preState => !preState)
    }

    return (
        <div onClick={changeHandler} style={close ? display : noDisplay} >
            <div className="todo_input"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
            >
                <div className="todo_input_flex">
                    <div className="todo_input_circule"
                        style={normal ? bgColor : noBgColor}>
                        <img style={normal ? display : noDisplay} src={tickIcon} alt="check-icon" />
                    </div>
                    <p className="todo_text" style={normal ? textChange : noTextChange} >{props.item}</p>
                </div>
                <div className="todo_close" onClick={showHandler}>
                    <img style={show ? display : noDisplay} src={closeIcon} alt="close_icon" />
                </div>
            </div>
        </div>
    )
}