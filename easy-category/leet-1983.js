//PROBLEM: CHECK IF ALL THE INTEGERS IN THE RANGE ARE COVERED


//SOLUTION:
function isCovered (ranges , left , right) {

    for(let i = left  ; i <= right ; i++) {

        let flag = false;
        for(let [start , end] of ranges) {

            if(i >= start && i <= end) {
                flag = true;
                break;
            }
        }
        if(flag) return true;
    }

    return false;
}

console.log(isCovered([[1,2],[3,4],[5,6]] , 2 , 5))

/*
    TIME COMPLEXITY: O(N ^ 2)
    SPACE COMPLEXITY: O(1)
*/