// Reverse only letters:

let str = "a-bC=dEf!";

function isLetter(l) {
    return (l >= 'a' && l <= 'z') || (l >= 'A' && l <= 'Z');
}

function reverseEnglishLetter(s) {
    let arr = Array.from(s);
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (!isLetter(arr[left])) {
            left++;
        } else if (!isLetter(arr[right])) {
            right--;
        } else {
            let swap = arr[left]
            arr[left] = arr[right]
            arr[right] = swap;
            left++;
            right--;
        }
    }
    console.log(arr.join(""));
}

let res = reverseEnglishLetter(str);
console.log(res);