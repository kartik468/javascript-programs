var subarraySum = function(nums, k) {
  var count = 0;

  for (let mainIndex = 0; mainIndex < nums.length; mainIndex++) {
    const mainEl = nums[mainIndex];
    //   console.log("mainEl-index", mainEl, mainIndex);
    if (mainEl === k) {
      count++;
    }
    var subSum = mainEl;
    for (let subIndex = mainIndex + 1; subIndex < nums.length; subIndex++) {
      const subEl = nums[subIndex];
      //   console.log("subEl", subEl);
      subSum += subEl;
      //   console.log("subSum", subSum);
      if (subSum === k) {
        count++;
        // break;
      }
    }
    // console.log("=====");
  }
  console.log("***final_count***", count);
  return count;
};

// subarraySum([1, 2, 3, 0], 3); // 3
subarraySum([10, 2, -2, -20, 10], -10); // 3
// subarraySum([9, 4, 20, 3, 10, 5], 33); // 2
// subarraySum([1, -1, 0], 0); // 3
