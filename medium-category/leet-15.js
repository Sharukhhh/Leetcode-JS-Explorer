//PROBLEM: THREE SUM

console.log(threeSum([-1,0,1,2,-1,-4]))


function threeSum(arr) {
    let result = [];
    arr.sort((a , b) => a - b);

    for(let i = 0 ; i < arr.length - 2 ; i++) {

        //to avoid duplicates fro 'i'
        if(i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }
    
        let left = i + 1;
        let right = arr.length - 1;

        while(left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if(sum === 0) {
                result.push([arr[i] , arr[left] , arr[right]]);

                // To avoid duplicates
                while(arr[left] === arr[left + 1]) left++;
                while(arr[right] === arr[right - 1]) right--;

                left++;
                right--;

            } else if(sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
}


//TIME COMPLEXITY: O(N^2)
//SPACE COMPLEXITY: O(N)