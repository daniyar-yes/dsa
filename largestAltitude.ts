function largestAltitude(gain: number[]): number {
    let accumulator: number = 0;
    let maxAlt: number = 0;

    for (let i=0; i<gain.length; i++) {
        accumulator += gain[i];
        maxAlt = Math.max(maxAlt, accumulator)
    }



    return maxAlt;
};