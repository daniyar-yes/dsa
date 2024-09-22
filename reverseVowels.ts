function reverseVowels(s: string): string {

    if (!s.length) return '';

    let vowelsOnly: string[] = [];
    let result: string[] = Array.from(s);
    const referenceVowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];


    for (let i = 0; i < s.length; i++) {
        if (referenceVowels.includes(s[i])) {
            vowelsOnly.unshift(s[i])
        }

    }

    let j: number = 0;

    for (let i = 0; i < s.length; i++) {
        if (referenceVowels.includes(s[i])) {
            result[i] = vowelsOnly[j];
            j++;
        }
    }


    return result.join('');;
};