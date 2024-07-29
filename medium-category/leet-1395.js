//PROBLEM: COUNT NO. OF TEAMS


//SOLUTION:
function teamsCount (ratingArr) {

    let teamCount = 0;

    /*
        Since the pairs are i , j , k and condition i < j < k, we select middle soldier j.
        Collect counf of all rating which is lesser or greater than j, 
        seperately that to the left and right of j seperately.

        the valid increasing teams are formed by leftSmaller and rightLarger && leftLarger and rightSmaller
    */
    for(let j = 1 ; j < ratingArr.length - 1 ; j++) {

        let leftSmaller = 0, leftLarger = 0;
        let rightSmaller = 0, rightLarger = 0;

        for(let i = 0 ; i < j ; i++) {
            if(ratingArr[i] < ratingArr[j]) leftSmaller++;
            if(ratingArr[i] > ratingArr[j]) leftLarger++;
        }

        for(let k = j + 1; k < ratingArr.length ; k++) {
            if(ratingArr[k] < ratingArr[j]) rightSmaller++;
            if(ratingArr[k] > ratingArr[j]) rightLarger++;
        }

        teamCount += leftSmaller * rightLarger + leftLarger * rightSmaller;
    }

    return teamCount;
}

console.log('The total No. of valid teams: ', teamsCount([2,5,3,4,1]));
console.log('The total No. of valid teams: ', teamsCount([1,2,3,4]));



//TIME COMPLEXITY: O(N ^ 2)
//SPACE COMPLEXITY: O(1)