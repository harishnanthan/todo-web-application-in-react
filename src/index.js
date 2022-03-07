import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(
    // StrictMode is a tool for highlighting potential problems in an application.
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
