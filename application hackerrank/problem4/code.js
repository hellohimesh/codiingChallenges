let steps = 12;
let path = `DDUUDDUDUUUD`;
function countingValleys(steps, path) {
    let seaLevel = 0;
    let valley = false;
    let valleyCount = 0;
    for (let i = 0; i < steps; i++) {
        seaLevel = parseInt(seaLevel) + parseInt(checkIfitsUphillOrUpHill(path[i]));
        if (seaLevel < 0) valley = true;
        if (seaLevel > 0) valley = false;
        if (seaLevel == 0 && valley == true) valleyCount += 1;
    }
    return valleyCount;
}
function checkIfitsUphillOrUpHill(step) {
    if (step == 'U') {
        return 1;
    } else if (step == 'D') {
        return -1;
    }
}
countingValleys(steps, path);