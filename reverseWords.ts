function reverseWords(s: string): string {
    let intermediate: string[] = s.split(' ').filter(word => word !== '');

    let p1: number = 0;
    let p2: number = intermediate.length - 1;
    let temp: string;

    while(p1 < p2) {
        temp = intermediate[p2];
        intermediate[p2] = intermediate[p1];
        intermediate[p1] = temp; 
        p1++;
        p2--;
    }
    return intermediate.join(' ');
};