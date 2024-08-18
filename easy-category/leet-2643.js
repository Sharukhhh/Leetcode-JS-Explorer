//PROBLEM: ROWS WITH MAXIMUM ONES



//SOLUTION:
function mxmOnes(matrix) {

    let maxOneCount = -Infinity;
    let minIndex = Infinity;

    for(let i = 0 ; i < matrix.length ; i++) {

        let arr = matrix[i];
        let count = 0;
        for(let j = 0 ; j < arr.length ; j++) {

            if(arr[j] === 1) count++;
        }

        if(count > maxOneCount) {
            maxOneCount = count;
            minIndex = i;

        } else if(count === maxOneCount && i < minIndex) {
            minIndex = i;
        }
    }

    return [minIndex , maxOneCount]
}


console.log(mxmOnes([[0,0,0],[0,1,1]]))


/*
    TIME COMPLEXITY: O(N * M)
    SPACE COMPLEXITY: O(1)
*/