export const twoSum = function (nums: Array<number>, target: number) {
  let firstVar;
  let secondVar;

  for (let i = 0; i < nums.length; i++) {
    firstVar = nums[i];
    for (let a = 0; a < nums.length; a++) {
      secondVar = nums[a];
      if (firstVar + secondVar === target && i !== a) return [i, a];
    }
  }

  return [0, 0];
};

/*
    This was the first solution that went into my mind, after viewing other solutions, 
    the one that seems to be the fastest and the most efficient would be to loop over the array
    while stocking i and nums [i]






    let mp = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        
        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }
        
        mp.set(nums[i], i)
    }

*/
