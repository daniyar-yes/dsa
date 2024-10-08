function maxVowels(s: string, k: number): number {
    type VowelsObject = {
       [key: string]: boolean;
    };
    let vowels: VowelsObject = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
    }
    
    /*
    and we slide over our s string with a window of len k
    abciiidef, k=3
    x y

    and for the first substring
    abc

    we check each letter, but we don't need to iterate twice.
    in the main loop, we go like
    a-b-c - no, it has to be a separate loop.

    maybe it's a first loop, when we set the max number of vowels, if any
    for that, we need to count our vowels, counter initiates at 0
    we need a var for maxVowels, too, and start at 0;

    we go our first loop

    a-b-c

    and check each letter, if it's a vowel
    but how?
    
    if (substring[i] is in the vowels[])

    of if vowels is an object with keys: {a: true; e: true; i: true; o: true; u: true}
    we can access it like:
    if (vowels.substring[i]) counter++;
    meaning that if the vowels.a == true, then counter++, otherwise nothing.
    */
    let counter: number = 0;
    let maxVowels: number = 0;

    // lets do first substring only

    for (let i=0; i<k; i++) {
        if (vowels[s[i]] === true) counter++;
    }

    maxVowels = Math.max(maxVowels, counter);
    
    // now since we calculate correctly the vowels of the first k substring, we know the number of maxVowels
    // we can slide the window right, by checking vowels[s[k]] === true, and if true, we add 1, and remove the value of vowels[s[j-k]]  from the maxVowels 

    let isNextVowel, isPrevVowel: boolean = false;
    let nextNum: number = 0;
    let prevNum: number = 0;
    for (let j=k; j<s.length; j++) {

        isNextVowel = vowels[s[j]];
        if (isNextVowel) {
            nextNum = 1;
        }
        isPrevVowel = vowels[s[j-k]];
        if (isPrevVowel) {
            prevNum = 1;
        }


        counter = counter + nextNum - prevNum;
        nextNum = 0;
        prevNum = 0;
        maxVowels = Math.max(maxVowels, counter);

    }


    return maxVowels;
};