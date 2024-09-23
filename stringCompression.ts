function compress(chars: string[]): number {
    let current: string = "";
    let counter: number = 0;
    let results: string[] = [];

    if (chars.length == 0) return 0;

    if (chars.length == 1) {
        return 1;
    }

    for (let i=0; i<chars.length; i++) {

        current = chars[i];
        counter++;

        for (let j=i+1; j<chars.length; j++) {

           if (chars[j] === current) {
            counter++;
        } else {
            break;
        }
        }

        results.push(current);
        if (counter > 1) {
            let stringsArr = (counter.toString().split(''));
            results = results.concat(stringsArr);

        };
        i += (counter - 1); // important to jump to the next group
        counter = 0;

    }

    chars.length = 0;
    for (let k = 0; k < results.length; k++) {
        chars.push(results[k]);
    }
    return chars.length;

};