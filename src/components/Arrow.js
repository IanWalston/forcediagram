import React from 'React'
import { Chip } from '@material-ui/core'

export default function Arrow({ color, angle, magnetude,setEditing }) {
    return (<span>
        <div className='line' style={{ background: color }}>
        </div>
        <div className='arrowhead' style={{ borderColor: color }}>
        </div>

    </span>)
}