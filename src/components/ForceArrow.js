import React, { useState, useCallback, useEffect } from 'react'
import Arrow from "./Arrow"
import { Chip } from "@material-ui/core"
import { getAngleFromMouseEvent } from "../functions"



export default function ForceArrow({ id, setAddingForceArrow, magnetude, updateOneForceAngle, color, defaultEditing }) {
    const [angle, setAngle] = useState(90)
    const [editing, setEditing] = useState(defaultEditing || true)
 
    const handleMouseMove = useCallback((e) => {
        if (!editing) return


        let tempAngle = getAngleFromMouseEvent(e)

        setAngle(tempAngle)


        updateOneForceAngle(id, tempAngle)
    }, [])  

    useEffect(()=>{
        if(editing){
            setAddingForceArrow(true)
            window.addEventListener("mousemove", handleMouseMove, true)
        } else {
            setAddingForceArrow(false)
            window.removeEventListener("mousemove", handleMouseMove, true)
        }
    },[editing])
    
    const handleClick = (e) => {
        if (!e.target.classList.value.includes("MuiChip-label")) {
            setEditing(false)
            setAddingForceArrow(false)
        }
    }
    
    const handleChipClick=()=>{
        setEditing(!editing)
    }
    
    return (
        <>
            <div className='force-arrow' key={id} onClick={handleClick} style={{ transform: `rotate(${0-angle}deg)` }}>
                <Arrow
                    color={color? color : editing ? "blue" : "black"}
                    angle={angle}
                    magnetude={magnetude}
                    setEditing={setEditing}
                />
                <div className='arrowDisplay' style={{ transform: `rotate(${angle}deg)` }}>
                    <Chip onMouseDown={handleChipClick} label={`${angle}°, ${magnetude} N`} />
                    
                </div>
            </div>
        </>)
}