function findSubarraySum(nums, sum) {
  var n = nums.length;
  // HashMap to store number of subarrays
  // starting from index zero having
  // particular value of sum.
  let prevSum = new Map();
  let res = 0;

  // Sum of elements so far.
  let currsum = 0;
  for (let i = 0; i < n; i++) {
    // Add current element to sum so far.
    currsum += nums[i];

    // If currsum is equal to desired sum,
    // then a new subarray is found. So
    // increase count of subarrays.
    if (currsum == sum) {
      res++;
    }

    // currsum exceeds given sum by currsum
    //  - sum. Find number of subarrays having
    // this sum and exclude those subarrays
    // from currsum by increasing count by
    // same amount.
    if (prevSum.has(currsum - sum)) {
      res += prevSum.get(currsum - sum);
    }

    // Add currsum value to count of
    // different values of sum.
    let count = prevSum.get(currsum);
    if (count == null) {
      prevSum.set(currsum, 1);
    } else {
      prevSum.set(currsum, count + 1);
    }
  }
  console.log(res);
  return res;
}


// findSubarraySum([1, 2, 3, 0], 3); // 3
findSubarraySum([1, 2, 3, 0], 2); // 
// findSubarraySum([10, 2, -2, -20, 10], -10); // 3
// findSubarraySum([9, 4, 20, 3, 10, 5], 33); // 2
// findSubarraySum([1, -1, 0], 0); // 3
