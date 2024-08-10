//PROBLEM: CHECK IF EVERY ROW AND COLUMN CONTAIN ALL THE NUMBERS


//SOLUTION:
function validateMatrix (matrix) {

    const n = matrix.length;

    //helper function to check if each row / col arrays are valid according to the condition
    function isValid(arr) {
        const set = new Set();
        for(let i = 0; i < arr.length ; i++) {
            
            if(arr[i] === 0 || arr[i] > n || set.has(arr[i])) return false;
            set.add(arr[i]);
        }
        return set.size === n;
    }

    //check row wise
    for(let i = 0 ; i < matrix.length ; i++) {
        
        if(!isValid(matrix[i])) return false; 
    }

    //check column wise
    for(let j = 0 ; j < matrix[0].length ; j++) {

        let col = [];
        for(let i = 0 ; i < matrix.length ; i++) {
            col.push(matrix[i][j]);
        }

        if(!isValid(col)) return false;
    }

    return true;
}


console.log(validateMatrix([[1,2,3],[3,1,2],[2,3,1]]));
console.log(validateMatrix([[1,1,1],[1,2,3],[1,2,3]]))



/*
    TIME COMPLEXITY: O(N ^ 2)
    SPACE COMPLEXITY: O(1)
*/