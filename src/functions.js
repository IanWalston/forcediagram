export function deg2rad(degree) {
    return degree * Math.PI / 180
}

export function rad2deg(radians) {
    return radians * 180 / Math.PI
}

export function getAngleFromMouseEvent(e, center) {
    const adjacent = (e.clientX - center.x)
    const opposite = (center.y - e.clientY)

    const angleRadians = Math.atan(opposite / adjacent)

    let angleDegrees = rad2deg(angleRadians)

    if (adjacent < 0) {
        angleDegrees = 180 + angleDegrees
    }

    return Math.round(angleDegrees)
}

export function getResultantFromForces(forces) {
    let xForces = forces.map(force => force.magnetude * Math.cos(deg2rad(force.angle)))
    let yForces = forces.map(force => force.magnetude * Math.sin(deg2rad(force.angle)))

    let sumX = xForces.reduce((a, b) => a + b)
    let sumY = yForces.reduce((a, b) => a + b)

    let resultantMagnetude = Math.hypot(sumX, sumY)

    let resultantAngle = rad2deg(Math.atan(sumY / sumX))

    if ( sumX < 0){
        resultantAngle += 180
    } 
    let resultant = {
        angle: Math.round(resultantAngle, 2),
        magnetude: Math.round(resultantMagnetude, 2),
        sumX: sumX,
        sumY: sumY
    }

    return resultant

}