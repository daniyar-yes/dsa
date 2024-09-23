function compress(chars: string[]): number {
    let current: string = "";
    let counter: number = 0;
    let results: string[] = [];

    if (chars.length == 0) return 0;

    if (chars.length == 1) {
        return 1;
    }

    for (let i=0; i<chars.length; i++) {
        if (results.includes(chars[i])) continue;

        current = chars[i];
        counter++;

        for (let j=i+1; j<chars.length; j++) {
            if (chars[j] !== current) continue;

            else {
                counter++;
            }
        }

        results.push(current);
        if (counter > 1) {
            let stringsArr = (counter.toString().split(''));
            results = results.concat(stringsArr);

        };
        counter = 0;
    }

    chars.length = 0;
    for (let k = 0; k < results.length; k++) {
        chars.push(results[k]);
    }
    return chars.length;

};