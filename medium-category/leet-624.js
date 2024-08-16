//PROBLEM: MAXIMUM DISTANCE IN ARRAYS


//SOLUTION:
function findMaxDistance (arrays) {

    let globalMin = arrays[0][0];
    let globalMax = arrays[0][arrays[0].length - 1];

    let maxDistance = -Infinity;

    for(let i = 1 ; i < arrays.length; i++) {

        let currMin = arrays[i][0];
        let currMax = arrays[i][arrays[i].length - 1];

        maxDistance = Math.max(
            maxDistance,
            Math.abs(currMax - globalMin),
            Math.abs(currMin - globalMax)
        );

        globalMax = Math.max(globalMax , currMax);
        globalMin = Math.max(globalMin , currMin);
    }

    return maxDistance;
}

console.log(findMaxDistance([[1,2,3],[4,5],[1,2,3]]))


/*
    TIME COMPLEXITY: O(M)
    SPACE COMPLEXITY: O(1)
*/