// PROBLEM: PALINDROME NUMBER

//SOLUTION:
//1 - (Coverting to a string)
function isPalindrome(number) {
    /*
    if number is negative or number ending with 0 not considered as palindrome,
    because if reversed, the number start with 0, which is a not a valid number.
    */
    if(number < 0 || (number % 10 === 0 && number !== 0)) {
        return false;
    }
    const strNum = String(number);

    let left = 0;
    let right = strNum.length - 1;

    while(left < right) {
        if(strNum[left] !== strNum[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
// ....................................................................................................

//2 - (Without converting to a string)
function isPalindrome2(number) {

    if(number < 0 || (number % 10 === 0 && number !== 0)) {
        return false;
    }
    let originalNumber = number;         //variable to hold given number
    let reversed = 0;                    //reversed number (initiallly 0)

    /*
        A "number % 10".
        dividing a number by 10 shifts the decimal place one position to the left, 
        effectively isolating the last digit.
    */

    while(number > 0) {
        let lastDigit = number % 10;                      //extracting the last digit
        reversed = reversed * 10 + lastDigit;             //building the reversed version of number
        number = Math.floor(number / 10);                 //removing last digit from given number
    }

    return originalNumber === reversed;
}

console.log(isPalindrome2(121));
console.log(isPalindrome2(-453));

//Converting to string:  (n stands for length of the string)
//TIME COMPLEXITY: O(N)
//SPACE COMPLEXITY: O(N)


//Without converting to string:
//TIME COMPLEXITY: 
//SPACE COMPLEXITY: O(1)