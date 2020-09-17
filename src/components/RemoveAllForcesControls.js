import React from 'react'
import { Button } from '@material-ui/core'

function RemoveAllForcesControls({ setForces }) {
    
    const handleClick = () => setForces({})
    
    return <Button onClick={handleClick} variant='outlined' color="secondary">Remove All Forces</Button>
}

export default RemoveAllForcesControls
