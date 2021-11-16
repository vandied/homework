// Given an integer array nums, move all 0's to the end of it while maintaining
// the relative order of the non-zero elements.
//
// Note that you must do this in-place without making a copy of the array.
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    if (nums.length <= 1) {
        return;
    }

    let writePointer = 0;
    for(let readPointer = 0; readPointer < nums.length; readPointer++) {
        if(nums[readPointer] !== 0) {
            nums[writePointer] = nums[readPointer]
            writePointer++;
        }
    }

    for(let i = writePointer; i < nums.length; i++) {
        nums[i] = 0;
    }

}