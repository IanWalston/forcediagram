import React from 'React'

export default function Arrow({ color }) {
    return (<span>
        <div className='line' style={{ background: color }}></div>
        <div className='arrowhead' style={{ borderColor: color }}></div>
    </span>)
}