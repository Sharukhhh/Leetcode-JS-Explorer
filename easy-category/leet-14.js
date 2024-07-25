// PROBLEM: LONGEST COMMON PREFIX


//SOLUTION:
function longestCommonPrefix (arr) {

    let result = '';
    let compareStr = arr[0];
    for(let i = 0 ; i < arr.length ; i++) {

        let str = arr[i];
        let j = 0;

        while(j < str.length && str[j] === compareStr[j]) {
            j++;
        }
        
        result = str.substring(0 , j);
        if(result === '') break;
    }

    return result;
}

console.log('The longest common prefix: ',longestCommonPrefix(["flower","flow","flight"]))
console.log('The longest common prefix: ',longestCommonPrefix(["dog","racecar","car"]))


//TIME COMPLEXITY: O(N ^ 2)
//SPACE COMPLEXITY: O(1)