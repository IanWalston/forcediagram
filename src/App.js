import React, { useState, useEffect } from "react";
import ForceArrow from './components/ForceArrow'
import ResultantForceArrow from './components/ResultantForceArrow'
import Body from './components/Body'
import { Grid, Button, FormHelperText, FormControlLabel, Checkbox, FormControl } from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid';


import { getResultantFromForces } from './functions'
import "./index.css"

export default function App() {

    const [addingForceArrow, setAddingForceArrow] = useState(false)
    const [forces, setForces] = useState({})
    const [resultantForce, setResultantForce] = useState()
    const [showResultant, setShowResultant] = useState(false)

    useEffect(() => {

        if (!addingForceArrow) {

            let tempForces = Object.keys(forces).map(id => forces[id])

            if (tempForces.length > 1) {

                let resultantForce = getResultantFromForces(tempForces)
                setResultantForce(resultantForce)
            } else {
                setResultantForce(0)
            }

        }
    }, [addingForceArrow])

    const handleAddForceArrow = () => {
        setAddingForceArrow(true)

        const id = uuidv4()

        let tempForces = forces
        forces[id] = {
            angle: 0,
            magnetude: 10
        }

        setForces(tempForces)
    }

    const updateOneForceAngle = (id, angle) => {

        let tempForces = forces

        if (tempForces[id]) {
            tempForces[id].angle = angle
        }

        setForces(tempForces)
    }

    return (<>
        <Grid container>
            <Grid item md={6}>
                <div id='circle'>
                    <div id='force-arrows'>
                        {
                            Object.keys(forces).map(id => {
                                return <ForceArrow
                                    id={id}
                                    angle={forces[id].angle}
                                    setAddingForceArrow={setAddingForceArrow}
                                    magnetude={forces[id].magnetude}
                                    updateOneForceAngle={updateOneForceAngle}
                                />
                            })
                        }
                        {
                            resultantForce &&
                            showResultant &&
                            <ResultantForceArrow
                                angle={resultantForce.angle}
                                magnetude={resultantForce.magnetude}
                            />
                        }
                    </div>
                    <Body />
                </div>
            </Grid>
            <Grid container item md={3} direction="column" justify="space-evenly" alignItems="flex-end">
                <Grid item  >
                    <Button
                        onClick={handleAddForceArrow}
                        children="Add Force Arrow"
                        disabled={addingForceArrow}
                        variant="outlined"
                        color="primary"
                        />
                        <FormHelperText>This will create a new force on the object, represented by an arrow</FormHelperText>
                        <FormHelperText>The angle of the force can be changed by left clicking the button on the arrow and moving your mouse</FormHelperText>
                        <FormHelperText>The magnitude of the force can be changed by right clicking the button on the arrow</FormHelperText>
                </Grid>
                <Grid item >
                    <FormControl>

                        <FormControlLabel
                            control={<Checkbox checked={showResultant} onChange={() => setShowResultant(!showResultant)} name="showResultant" />}
                            label="Show Resultant"


                        />
                        <FormHelperText>Resultant is the resulting force that acts on the body. It is a combination of all forces currently acting on the body</FormHelperText>
                        <FormHelperText>Resultant will show if there are two or more force arrows</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    </>
    );
}
