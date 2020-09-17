import React, { useState } from 'react'
import Arrow from "./Arrow"
import { Chip } from "@material-ui/core"
import './index.css'

export default function ForceArrow({ defaultAngle, id, setAddingForceArrow, magnetude }) {
    const [angle, setAngle] = useState(defaultAngle)
    const [editing, setEditing] = useState(true)

    const handleMouseMove = (e) => {

        if (!editing) return

        const adjacent = (e.clientX - 300)
        const opposite = (e.clientY - 300)

        const angleRadians = Math.atan(opposite / adjacent)

        let angleDegrees = angleRadians * 180 / Math.PI

        if (adjacent < 0) {
            angleDegrees = 180 + angleDegrees
        }

        setAngle(angleDegrees + 90)
    }

    const handleClick = (e) => {
        console.log(e.target)
        if (!e.target.classList.value.includes("MuiChip-label")) {
            setEditing(false)
            setAddingForceArrow(false)
        }
    }

    const handleChipClick=()=>{
        setEditing(true)
    }

    return (
        <>
            <div class='force-arrow' onMouseMove={handleMouseMove} onClick={handleClick} style={{ transform: `rotate(${angle - 90}deg)` }}>
                <Arrow
                    color={editing ? "blue" : "black"}
                    angle={angle}
                    magnetude={magnetude}
                    setEditing={setEditing}
                />
                <div className='arrowDisplay' style={{ transform: `rotate(${90 - angle}deg)` }}>
                    <Chip onClick={handleChipClick} label={`${Math.round(angle)}°, ${magnetude} N`} />
                </div>
            </div>
        </>)
}