//PROBLEM: HOW MANY NUMBER ARE SMALLER THAN THE CURRENT NUMBER


//SOLUTION:
function getSmallerOnesForCurrent (arr) {

    const result = new Array(arr.length)

    for(let i = 0 ; i < arr.length ; i++) {

        let count = 0;
        for(let j = 0; j < arr.length ; j++) {

            if(i === j) continue;
            if(arr[i] > arr[j]) count++;
        }

        result[i] = count;
    }

    return result;
}

console.log(getSmallerOnesForCurrent([8,1,2,2,3]))


//TIME COMPLEXITY: O(N ^ 2)
//SPACE COMPLEXITY: O(N)