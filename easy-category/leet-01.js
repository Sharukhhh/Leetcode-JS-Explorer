// PROBLEM: TWO SUM

//SOLUTION:
const arr = [3,2,4];
const arr2 = [2,7,11,15];

function twoSum (arr , target) {

    const obj = {};

    for(let i = 0 ;  i< arr.length ; i++) {
        let secondValue = target - arr[i];

        if(!obj.hasOwnProperty(secondValue)) {
            obj[arr[i]] = i;

        } else {
            return [i , obj[secondValue]];
        }
    }
}

console.log(twoSum(arr, 6));
console.log(twoSum(arr2 , 9));




//TIME COMPLEXITY: O(N)
//SPACE COMPLEXITY: O(N)