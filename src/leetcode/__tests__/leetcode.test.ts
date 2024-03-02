import { twoSum } from "../leetcode";

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

describe("Two sum", () => {
  it("should return indices of the two numbers such that they add up to target", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const outPut = [0, 1];
    expect(twoSum(nums, target)).toStrictEqual(outPut);
  });

  it("should return indices of the two numbers such that they add up to target (2)", () => {
    const nums = [3,2,4];
    const target = 6;
    const outPut = [1, 2];
    expect(twoSum(nums, target)).toStrictEqual(outPut);
  });

  it("should return indices of the two numbers such that they add up to target (3)", () => {
    const nums = [3,3];
    const target = 6;
    const outPut = [0, 1];
    expect(twoSum(nums, target)).toStrictEqual(outPut);
  });

  it("should return indices of the two numbers such that they add up to target (4)", () => {
    const nums = [0,0];
    const target = 6;
    const outPut = [0, 0];
    expect(twoSum(nums, target)).toStrictEqual(outPut);
  });
});
