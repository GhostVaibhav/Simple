import React from 'react'

export default function ThemeButton(props) {
    const theming = {
        "bg-[#059669]": "light",
        "bg-[#ff220e]": "red",
        "bg-[#2563eb]": "blue"
    }
    return (
        <button className={`${props.active ? "border-white" : ""} h-4 w-10 mx-2 my-4 border-2 border-transparent ${props.bgColor} rounded-full`} onClick={() => props.setTheme(theming[props.bgColor])}></button>
    )
}
