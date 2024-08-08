//PROBLEM: LARGEST ODD NUMBER IN A STRING


//SOLUTION: 

function largestOddNum (str) {

    for(let i = str.length - 1 ; i >= 0 ; i--) {

        let digit = parseInt(str[i]);
        if(digit % 2 !== 0) {
            
            let subStr = str.substring(0 , i + 1);
            return subStr;
        }
    }

    return '';
}

console.log(largestOddNum('52'));
console.log(largestOddNum('116930120'));


//TIME COMPLEXITY: O(N)
//SPACE COMPLEXITY: O(1)

