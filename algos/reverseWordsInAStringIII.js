var reverseWords = function(s) {
    let arr = s.split(' ');
    

    const reverser = (stringArr) => {
        let end = stringArr.length-1;
        for (let i = 0; i < Math.floor(stringArr.length/2); i++) {
          [stringArr[i], stringArr[end]] = [stringArr[end], stringArr[i]];
          end --;
        }
        return stringArr;
    }

    for (let i = 0; i < arr.length; i++) {
        let wordArr = arr[i].split('');
        arr[i] = reverser(wordArr).join('')
    }

    return arr.join(' ');
};