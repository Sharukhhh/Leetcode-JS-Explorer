//PRBLEM: RANK TRANSFORMATION OF AN ARRAY


//SOLUTION:
function rankTransform(arr) {

    const sortedArr = arr.slice().sort((a , b) =>  a - b);

    const obj = {};
    let rank = 1;

    for(let num of sortedArr) {

        if(!obj[num]) {
            obj[num] = rank;
            rank++;
        }
    }

    return arr.map((val) => obj[val]);
}

console.log(rankTransform([40 , 10 , 20 , 30]));


//TIME COMPLEXITY: O(N)
//SPACE COMPLEXITY: O(N)