function largestAltitude(gain: number[]): number {
    let altitudes: number[] = [0];
    let accumulator: number = 0;
    let maxAlt: number = 0;

    for (let i=0; i<gain.length; i++) {
        accumulator += gain[i];
        altitudes.push(accumulator)
        maxAlt = Math.max(maxAlt, altitudes[i+1])
    }



    return maxAlt;
};