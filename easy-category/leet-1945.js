//PROBLEM: SUM OF DIGITS OF STRING AFTER CONVERT



//SOLUTION
function getSum (str , k) {

    let numStr = ''
    for(let i = 0 ; i < str.length ; i++) {

        numStr += str.charCodeAt(i) - 96;
    }

    for(let i = 0 ; i < k ; i++) {

        let sum = 0;
        for(let j = 0 ; j < numStr.length ; j++) {

            sum += parseInt(numStr[j]);
        }
        numStr = sum.toString();
    }
    return parseInt(numStr);
}

console.log(getSum('leetcode' , 2));


/*
    TIME COMPLEXITY: O(N ^ 2)
    SPACE COMPLEXITY: O(1)
*/
