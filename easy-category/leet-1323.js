//PROBLEM: MAXIMUM 69 NUMBER



//SOLUTION: 
function getLargestNum (num) {

    let largestNum = num;
    const numArr = String(num).split('');

    for(let i = 0 ; i < numArr.length ; i++) {

        let result = "";

        if(numArr[i] === '6') result += '9'
        else result += '6';

        let sum = numArr.reduce((acc , curr, indx) => {
            if(indx !== i) {
                acc += curr;
            }
            return acc;
        },'');

        result += sum;
        largestNum = Math.max(largestNum , parseInt(result));
    }

    return largestNum;
}


console.log(getLargestNum(9999))


//TIME COMPLEXITY: O(N ^ 2)
//SPACE COMPLEXITY: O(N)