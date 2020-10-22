import React from 'react'
import { Button, FormHelperText } from '@material-ui/core'

function Controls({ handleAddForceArrow, addingForceArrow }) {
    return (
        <>
            <Button
                onClick={handleAddForceArrow}
                children="Add Force Arrow"
                disabled={addingForceArrow}
                variant="outlined"
                color="primary"
            />
            <FormHelperText>This will create a new force on the object, represented by an arrow</FormHelperText>
            <FormHelperText>The angle of the force can be changed by left clicking the button on the arrow and moving your mouse</FormHelperText>
            <FormHelperText>The magnitude of the force can be changed by right clicking the button on the arrow (this feature has not yet been added)</FormHelperText>
        </>
    )
}

export default Controls
