import React, { useState } from "react"
import moonIcon from "../images/icon-moon.svg"
import sunIcon from "../images/icon-sun.svg"

export default function Header() {

    const [mode, setMode] = useState(true)

    return (
        <div className="header">
            <div className="header_title">
                TODO
            </div>
            <div className="lord_mode" onClick={() => setMode(prevMode => !prevMode)} >
                {mode ? <img src={sunIcon} alt='moon' /> : <img src={moonIcon} alt="sun" />}
            </div>
        </div >
    )
}