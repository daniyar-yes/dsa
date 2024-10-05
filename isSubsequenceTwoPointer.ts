function isSubsequence(s: string, t: string): boolean {
    if (s===t) return true;

    if (s.length > t.length) return false;

    let pointerS = 0;

    for (let pointerT = 0; pointerT < t.length; pointerT++) {
        if (s[pointerS] === t[pointerT]) pointerS++;
        if (pointerS === s.length) return true;
    }

    return false;
};