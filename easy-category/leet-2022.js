//PROBLEM: CONVERT 1D ARRAY INTO 2D ARRAY


//SOLUTION
function convertTo2D (originalArr , m , n) {

    if(m * n !== originalArr.length) return [];

    let result = [];
    for(let i = 0 ; i < m ; i ++) {

        let arr = originalArr.slice(i * n , i * n + n);
        result.push(arr);
    }

    return result;
}

console.log(convertTo2D([1,2,3,4] , 2 , 2));


/*
    TIME COMPLEXITY: O(M)
    SPACE COMPLEXITY: O(M * N)
*/