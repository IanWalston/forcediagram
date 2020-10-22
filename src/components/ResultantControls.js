import React from 'react'
import { FormControl, FormControlLabel, Checkbox, FormHelperText } from '@material-ui/core'

function Controls({ showResultant, setShowResultant, forces }) {
    return (
        <>
            <FormControl>

                <FormControlLabel
                    control={<Checkbox 
                        checked={showResultant}
                        disabled={!showResultant && Object.keys(forces).length <= 1}
                        onChange={() => setShowResultant(!showResultant)} 
                        name="showResultant" />
                    }
                    label="Show Resultant"

                />
                <FormHelperText>Resultant is the resulting force that acts on the body. It is a combination of all forces currently acting on the body</FormHelperText>
                <FormHelperText>Resultant will show if there are two or more force arrows</FormHelperText>
            </FormControl>
        </>
    )
}

export default Controls
