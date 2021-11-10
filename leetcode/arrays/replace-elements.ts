// in-place operations
// Given an array arr, replace every element in that array with the greatest element
// among the elements to its right, and replace the last element with -1.
// After doing so, return the array.
// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Input: arr = [400]
// Output: [-1]

function replaceElements(arr: number[]): number[] {
    let max = arr[arr.length - 1];

    if (arr.length > 1){
        for (let i = arr.length - 2; i >= 0; i-- ) {
            let currentValue = arr[i];
            arr[i] = max;

            if (currentValue > max) {
                max = currentValue;
            }
        }
    }

    arr[arr.length - 1] = -1;

    return arr;
}