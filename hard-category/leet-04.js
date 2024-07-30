//PROBLEM: MEDIAN OF TWO SORTED ARRAYS


//SOLUTION:
function getMedianOfArrays(arr1 , arr2) {

    const mergedArr = [...arr1 , ...arr2];
    mergedArr.sort((a , b) => a - b);

    const length = mergedArr.length;
    /*
        to find a median among given no .of values:
            * If given no .of elements / array length is odd, return the middle element of the array / list
            * If even, return the average of two middle elements of the array / list (middle - 1 and middle)
    */
    if(length % 2 !== 0) {
        return mergedArr[Math.floor(length / 2)];

    } else {
        return (mergedArr[(length / 2) - 1] + mergedArr[length / 2]) / 2;
    }
}

console.log('Median of result 1: ', getMedianOfArrays([1,3] , [2]))
console.log('Median of the result 2: ', getMedianOfArrays([1,2] , [3 , 4]))


//TIME COMPLEXITY: O(N Log N)
//SPACE COMPLEXITY: O(N)