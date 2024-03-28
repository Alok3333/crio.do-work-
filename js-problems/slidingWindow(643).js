// 643. Maximum Average Subarray I

let nums = [1, 12, -5, -6, 50, 3], k = 4;

function findMaxAverage(nums, k) {
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let startIndex = 0;
    let endIndex = k;
    let maxSum = sum;

    while (endIndex < nums.length) {
        sum -= nums[startIndex]
        startIndex++

        sum += nums[endIndex]
        endIndex++

        maxSum = Math.max(maxSum, sum);
    };

    return maxSum / k;
    // console.log(maxSum / k, sum);

    // console.log(endIndex, nums.length);
}

let res = findMaxAverage(nums, k);
console.log(res);