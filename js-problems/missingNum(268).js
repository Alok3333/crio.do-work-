// 268 - Find the missing number in an array

let nums = [9, 7, 2, 3, 1, 0, 4, 5, 6];

function missingNumber(nums) {
    let allXor = 0;

    for (let i = 0; i <= nums.length; i++) {
        allXor = allXor ^ i;
    }

    for (let num of nums) {
        allXor = allXor ^ num;
    }

    return allXor;
    console.log(allXor);
}

let res = missingNumber(nums);
console.log(res);

// TimeComplexity => O(N);
// SpaceComplexity => O(1);