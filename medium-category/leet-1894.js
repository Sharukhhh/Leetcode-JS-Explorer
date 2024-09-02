//PROBLEM: FIND THE STUDENT THAT WILL REPLACE THE CHALK

//SOLUTION

function chalkReplacer (chalk , k) {

    const totalSum = chalk.reduce((acc , curr) => acc += curr, 0);

    /*
        totalSum of all chalks in array, is the no. of chalks subtracted
        from available chalks in a round.
        Instead of going each rounds:
    */

    //This means "How much chalk is left after using enough for as many full cycles as possible?"
    k = k % totalSum;

    //Remaining k is the no of chalks left after completing all the cycles
    
    for(let i = 0 ; i < chalk.length ; i++) {

        if(k < chalk[i]) return i;
        k -= chalk[i];
    }
}


/*
    TIME COMPLEXITY: O(N)
    SPACE COMPLEXITY: O(1)
*/