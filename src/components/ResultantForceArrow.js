import React from 'react'
import Arrow from "./Arrow"
import { Chip } from "@material-ui/core"

export default function ForceArrow({ magnetude, angle }) {

    return (<div className='force-arrow' style={{ transform: `rotate(${0 - angle}deg)` }}>
        <Arrow
            color="red"
            angle={angle}
            magnetude={magnetude}
        />
        <div className='arrowDisplay' style={{ transform: `rotate(${angle}deg)` }}>
            <Chip label={`Resulting Force: ${angle}°, ${magnetude} N`} />
        </div>
    </div>)
}