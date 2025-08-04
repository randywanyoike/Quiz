//Given a list containing n distinct numbers from 0 to n, find the missing number.



//Input: [3, 0, 1]

//Output: 2
//NOTE: No number limit





function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([3, 0, 1])); 