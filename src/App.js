import React, { useState } from "react";
import ForceArrow from './components/ForceArrow'
import { Container, Grid, Button } from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid';
import "./index.css"

export default function App() {

    const [addingForceArrow, setAddingForceArrow] = useState(false)

    const [forces, setForces] = useState([])

    const handleAddForceArrow = () => {
        let newForce = {
            id: uuidv4(),
            editing: true,
            angle: 90,
            magnetude: 10
        }
        setAddingForceArrow(true)
        setForces(forces.concat(newForce))
    }

    return (<>
        <Grid container>
            <Grid item md={6}>
                <div className='circle'>
                    <div id='force-arrows'>
                        {
                            forces.map(force => {
                                return <ForceArrow
                                    id={force.id}
                                    defaultAngle={force.angle}
                                    setAddingForceArrow={setAddingForceArrow}
                                    magnetude={force.magnetude}
                                />
                            })
                        }
                    </div>
                    <div id='body'>

                    </div>
                </div>
            </Grid>
            <Grid item md={6}>
                <Button
                    onClick={handleAddForceArrow}
                    children="Add Force Arrow"
                    disabled={addingForceArrow}
                />
            </Grid>
        </Grid>
    </>
    );
}
