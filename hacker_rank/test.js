var subarraySum = function (arr, k) {
  // Calculate all subarrays
  let n = arr.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      // Calculate required sum
      sum += arr[j];

      // Check if sum is equal to
      // required sum
      if (sum == k) res++;
    }
  }
  console.log(res);
};

subarraySum([10, 2, -2, -20, 10], -10); // 3
subarraySum([1, -1, 0], 0); // 3
