function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const results: boolean[] = [];
    let currentKidsCandies;
    const max = candies.reduce((a, b) => Math.max(a, b), -Infinity);
    for (let i = 0; i < candies.length; i++) {
        currentKidsCandies = candies[i] + extraCandies;
        currentKidsCandies >= max ? results.push(true) : results.push(false)
    }
    return results;
};