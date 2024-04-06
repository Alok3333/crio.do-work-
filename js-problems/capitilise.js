// capitilise first word / character of string.

let str = "the lazy dog";

function capitiliseLetter(letter){
    let word = letter.charCodeAt(0);
    word -= 32;
    return String.fromCharCode(word);
}

function capitilise(str) {
    // convert from string to array (Bcz of str is immutable)
    let arr = Array.from(str);

    for (let i = 0; i < arr.length; i++) {
        // (i == 0) means every first word should be capital
        if (i == 0 || arr[i - 1] == " " || arr[i - 1] == "."){
            // if characters small then we will convert to the capital
            if(arr[i] >= "a" && arr[i] <= "z"){
                arr[i] = capitiliseLetter(arr[i]);
            }
        }
    }

    return arr.join(" ");
    // console.log(arr);
}

let res = capitilise(str);
console.log(res);