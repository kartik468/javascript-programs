const intervals = [
    [6, 9],
    [2, 3],
    [9, 11],
    [1, 5],
    [14, 18],
  ];
  // should output [ [ 6, 11 ], [ 1, 5 ], [ 14, 18 ] ] 
  
  const intervals1 = [
    [4, 8],
    [2, 6],
    [5, 7]
  ];
  // should output [ [ 2, 8 ] ]

  function getOverlappingIntervals(intervals) {
    let resultIntervals = [];
  
    for (let i = 0; i < intervals.length; i++) {
      const interval = intervals[i];
  
      let [currentLowerLimit, currentHigherLimit] = interval;
  
      //   console.log(currentLowerLimit, currentHigherLimit);
      for (let j = 0; j < intervals.length; j++) {
        const element = intervals[j];
        const [low, high] = element;
        if (
          (low >= currentLowerLimit && low <= currentHigherLimit) ||
          (high >= currentLowerLimit && high <= currentHigherLimit) ||
          (currentLowerLimit >= low && currentLowerLimit <= high) ||
          (currentHigherLimit >= low && currentHigherLimit <= high)
        ) {
          currentLowerLimit = Math.min(low, currentLowerLimit);
          currentHigherLimit = Math.max(high, currentHigherLimit);
        }
      }
      resultIntervals.push([currentLowerLimit, currentHigherLimit]);
    }
    console.log(resultIntervals);
  }
  
  getOverlappingIntervals(intervals); // [ [ 6, 11 ], [ 1, 5 ], [ 14, 18 ] ] 
  getOverlappingIntervals(intervals1); // [ [ 2, 8 ] ]
  