import React from 'react'
import './button.css'
 function Button({lable}) {
    return (
        <div data-testid="button" className="button-style">
            {lable}
        </div>
    )
}
export default Button;