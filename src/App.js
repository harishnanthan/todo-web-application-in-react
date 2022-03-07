import Header from "./components/Header"
// import React, { useState } from "react"
import "./style/style.scss"
import backgroundImgDark from "./images/bg-desktop-dark.jpg"
import InputField from "./components/InputField"
// import backgroundImgLight from "./images/bg-desktop-light.jpg"

export default function App() {

    return (
        <div className="app"
            style={{
                backgroundImage: `url(${backgroundImgDark})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
            }}
        /*style={{ backgroundImage: mode ? `url(${backgroundImgDark})` : `url(${backgroundImgLight})`}}*/
        >
            <main>
                <Header />
                <InputField />
            </main>
        </div >
    )
};