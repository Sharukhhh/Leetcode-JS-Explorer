// PROBLEM: CONCATENATION OF ARRAY

console.log(concatenateArray([1,2,1]))

function concatenateArray(arr) {
    return [...arr , ...arr];
}

//TIME COMPLEXITY: O(N)         "N" indicates the length fo the array
//SPACE COMPLEXITY: O(N)



