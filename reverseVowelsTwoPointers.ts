function swap(str: string[], i: number, j: number) {
    const temp = str[i]
    str[i] = str[j]
    str[j] = temp
}

function reverseVowelsTwoPointers(s: string): string {
    const sArr = s.split('')
    const vowels = new Set<string>(['a', 'e', 'i', 'o', 'u'])
    
    let p1 = 0
    let p2 = s.length - 1

    while (p1 < p2) {
        if (vowels.has(sArr[p1].toLowerCase()) && vowels.has(sArr[p2].toLowerCase())) {
            swap(sArr, p1, p2)
            p1++
            p2--
            continue
        }
        if (!vowels.has(sArr[p1].toLowerCase())) {
            p1++
        }
        if (!vowels.has(sArr[p2].toLowerCase())) {
            p2--
        }
    }

    return sArr.join('')
};