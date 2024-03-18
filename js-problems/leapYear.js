// find the year is leap year or Not...

function leapYear(year) {
    if (year % 400 == 0) {
        return `Leap Year ${year}`;
    } else if (year % 100 == 0) {
        return `Not Leap Year ${year}`;
    } else if (year % 4 == 0) {
        return `Leap Year ${year}`;
    } else {
        return `Not Leap Year ${year}`;
    }
}

let res = leapYear(2024);
console.log(res);