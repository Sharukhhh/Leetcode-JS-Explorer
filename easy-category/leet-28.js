// PROBLEM: FIND THE INDEX OF FIRST OCCURENCE IN A STRING


//SOLUTION:
function findStr(haystack , needle) {

    for(let i = 0 ; i < haystack.length ; i++) {

        if(haystack[i] === needle[0]) {

            let found = true;
            for(let j = 0 ; j < needle.length ; j++) {

                if(j === 0) continue;
                if(needle[j] !== haystack[i + j]) {
                    found = false;
                    break;
                }
            }
            if(found) return i;
        }
    }
    return -1;
}

const haystack = 'sadbutsad';
const needle = 'sad';

const haystack2 = 'leetcode';
const needle2 = 'leeto';

console.log(`${needle} found at: `, findStr(haystack , needle));
console.log(`${needle2} found at: `, findStr(haystack2 , needle2))


//TIME COMPLEXITY: O(N * M)
//SPACE COMPLEXITY: O(1)