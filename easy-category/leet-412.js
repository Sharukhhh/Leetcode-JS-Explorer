//PROBLEM: FIZZ BUZZ


//SOLUTION
function fizzBuzz (n) {

    const answer = new Array(n);

    for(let i = 1 ; i <= answer.length ; i++) {

        if(i % 3 === 0 && i % 5 === 0) answer[i - 1] = 'FizzBuzz'
        else if(i % 3 === 0) answer[i - 1] = 'Fizz'
        else if(i % 5 === 0) answer[i - 1] = 'Buzz'
        else answer[i - 1] = String(i);
    }
    return answer;
}

console.log(fizzBuzz(15));


/*
    TIME COMPLEXITY: O(N)
    SPACE COMPLEXITY: O(N)
*/