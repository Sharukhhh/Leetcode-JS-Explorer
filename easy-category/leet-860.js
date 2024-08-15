//PROBLEM: LEMONADE CHANGE

//SOLUTION
function lemonadeChange (bills) {

    let fiveCount = 0;
    let tenCount = 0;

    for(let amount of bills) {

        if(amount === 5) {
            fiveCount++;

        } else if(amount === 10) {
            if(fiveCount > 0) {
                fiveCount--;
                tenCount++;
            } else {
                return false;
            }

        } else {
            if(fiveCount > 0 && tenCount > 0) {
                fiveCount--;
                tenCount--;

            } else if(fiveCount >= 3) {
                fiveCount -= 3;

            } else {
                return false;
            }
        }
    }

    return true;
}


console.log(lemonadeChange([5,5,10,10,20]))


/*
    TIME COMPLEXITY: O(N)
    SPACE COMPLEXITY: O(1)
*/