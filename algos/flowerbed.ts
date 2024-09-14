function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let unplanted = n;

    for (let i = 0; i < flowerbed.length; i++) {
        if (unplanted === 0) break;

        if (flowerbed[i] == 1) {
            i++;
            continue;
        }

        if (!flowerbed[i-1] && !flowerbed[i+1]) {
         i++;
         unplanted--;
        }
    }

    return !unplanted;
};



    