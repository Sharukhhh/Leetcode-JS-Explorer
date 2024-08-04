//PROBLEM: RANGE SUM OF SORTED SUBARRAY SUMS


//SOLUTION:
function rangeSum (nums , n , left , right) {
    const mod = 10 ** 9 + 7
    subArraySum = []

    //finding all the sub array sums
    for(let i = 0 ;i < n ; i++) {

        let currSum = 0;
        for(let j = i ; j < n ; j++) {

            currSum += nums[j];
            subArraySum.push(currSum);
        }
    }

    //sorting in increasing order
    subArraySum.sort((a , b) => a - b);

    //Total sum from sub array sums within given indexes
    let result = 0;
    for(let i = left - 1 ; i < right ; i++) {
        result = (result + subArraySum[i]) % mod;
    }
    return result;
}

console.log(rangeSum([1 , 2, 3, 4] , 4 , 1 , 5));



//TIME COMPLEXITY: O(N ^ 2 Log N)
//SPACE COMPLEXITY: O(N ^ 2)

