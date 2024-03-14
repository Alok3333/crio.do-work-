//Algorithm: Check is a number is positive (+ve) or negative (-ve)

let number = 1;

function checkNumPositiveOrNegative(num) {
    if (num > 0) {
        return `${num} It's a positive number`;
    } else if (num < 0) {
        return `${num} It's a negative number`;
    } else if (num == 0) {
        return `${num} It's a zero number`;
    } else {
        return `${num} It is not a number`;
    }
};

let result = checkNumPositiveOrNegative(number);
console.log(result);