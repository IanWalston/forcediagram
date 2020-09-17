import React, { useState, useEffect } from "react";
import ForceArrow from './components/ForceArrow'
import ResultantForceArrow from './components/ResultantForceArrow'
import Body from './components/Body'
import AddForceControls from './components/AddForceControls'
import ResultantControls from './components/ResultantControls'
import RemoveAllForcesControls from './components/RemoveAllForcesControls'
import { Grid } from '@material-ui/core'
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
    }, [addingForceArrow, forces])

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
            <Grid item lg={6}>
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
                            (resultantForce &&
                            showResultant) ?
                            <ResultantForceArrow
                                angle={resultantForce.angle}
                                magnetude={resultantForce.magnetude}
                            /> : ''
                        }
                    </div>
                    <Body />
                </div>
            </Grid>
            <Grid container item lg={3} direction="column" justify="space-evenly" alignItems="flex-end">
                <Grid item  >
                    <AddForceControls handleAddForceArrow={handleAddForceArrow} addingForceArrow={addingForceArrow} />
                </Grid>
                <Grid item >
                    <ResultantControls showResultant={showResultant} setShowResultant={setShowResultant} />
                </Grid>
                <Grid item>
                    <RemoveAllForcesControls setForces={setForces}/>
                </Grid>
            </Grid>
        </Grid>
    </>
    );
}
