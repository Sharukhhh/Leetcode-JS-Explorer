//PROBLEM: CHECK IF THE SENTENCE IS PANGRAM

//SOLUTION:
function isPangram (sentence) {

    /*A pangram is a sentence where every letter of the English alphabet appears at least once.*/
    const map = {};
    for(let letter of sentence) {
        if(!map[letter]) map[letter] = true;
    }

    const result = Object.keys(map);
    return result.length === 26;
}

console.log(isPangram('thequickbrownfoxjumpsoverthelazydog'));


/*
    TIME COMPLEXITY: O(N)
    SPACE COMPLEXITY: O(1)
*/