//PROBLEM: KTH DISTINCT STRING IN AN ARRAY


//SOLUTION:
function kthDistinctStr (arr , k) {
    
    //create an object for obtaining frequency of each string in the array
    const frequency = {};
    for(let str of arr) {

        if(frequency[str]) frequency[str] += 1
        else frequency[str] = 1
    }

    //an array to store only distinct strings (found by who's count is 1)
    const distinct = [];
    for(let key in frequency) {

        if(frequency[key] === 1) distinct.push(key);
    }

    return distinct[k - 1] === undefined ? 'empty' : distinct[k - 1];
}

console.log(kthDistinctStr(["d","b","c","b","c","a"] , 2));
console.log(kthDistinctStr(["a","b","a"] , 3));


//TIME COMPLEXITY: O(N)         
//SPACE COMPLEXITY: O(N)