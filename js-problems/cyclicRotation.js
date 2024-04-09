// cyclicRotation clockWise order

let arr = [1, 2, 3, 4, 5];
let k = 2;

function reverseArr(nums, left, right) {
    while (left <= right) {
        let swap = nums[left];
        nums[left] = nums[right];
        nums[right] = swap;

        left++;
        right--;
    }
}

function cyclicRotation(nums, k) {
    let n = nums.length;
    // let arr = [];

    // reduce the time of k
    k = k % n;

    // reverse before the kth element
    reverseArr(nums, 0, n - k - 1);

    // reverse after the kth element
    reverseArr(nums, n - k, n - 1);

    // reverse from staring index (0) to last index (n -1)
    reverseArr(nums, 0, n - 1);

    return nums;
}

let res = cyclicRotation(arr, k);
console.log(res);