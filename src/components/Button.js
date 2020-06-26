import React from 'react';
import "./Buttons.css"

function Button({ children }) {

    return (
        <button className="Button">
            {children}
        </button>
    )
}
export default Button;