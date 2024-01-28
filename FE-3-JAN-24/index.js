// // Selecting single and unique element
// let headingEle = document.getElementById("heading1");
// // console.dir(headingEle);

// headingEle.innerHTML = "Welcome Friends";

let nums = [1, 3, 4, 2, 2];

var findDuplicate = function (nums) {
    let slow = nums[nums[0]];
    let fast = nums[nums[nums[0]]];

    while (slow != fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }

    slow = nums[0];

    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
};

console.log(findDuplicate(nums));    