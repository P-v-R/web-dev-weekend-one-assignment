
// Write a function called sortAlmostSorted which accepts an array of numbers that are sorted except for a single pair and returns a sorted array.

// function only need to loop through the array once, 
// function will raise two pointers, pointer one(p1) is assigned when our loop finds the first out of order number
// the second pointer(p2) will be assigned when we find the second out of place number

// to find the miss-matched numbers we need to look for...
    // p1 = if numbers[idx] > numbers[idx+1] and both pointers are undefined
    // p2 = if numbers[idx] < numbers[idx-1] AND p1 has been already been found

// if the array is less than one, or already sorted, return original array

/*  accepts an array of numbers that are sorted except for a single pair and returns a sorted array.    [1,2,4,5,3] >>> [1,2,3,4,5] */

function sortAlmostSorted(numbers) {
    let p1 = false
    let p2;
    if (numbers.length <= 1){
        return numbers
    }
    
    for(let i = 0;i<numbers.length; i++){
        // if num[i] is < num[i+1] AND p1 has yet to be assigned... this is the first off number
        if(numbers[i] > numbers[i+1] && !p1 && p1 !== 0 ){
            p1 = i
        // if num[i] < num[i-1] and p1 has been assigned - this is the second off number
        } else if (numbers[i] < numbers[i-1]){
            p2 = i
        // this checks if the original string is already sorted...
        } else if (i === numbers.length -1 && !p2){
            return numbers
        }
        console.log(i, numbers.length-1)
    }
    /// swap numbers and return string
    [numbers[p1], numbers[p2]]=[numbers[p2], numbers[p1]]
    return numbers
}

// sortAlmostSorted([1, 2, 3, 7, 5, 6, 4]); // [1, 2, 3, 4, 5, 6, 7]
// sortAlmostSorted([1, 2, 6, 4, 5, 3]);    // [1, 2, 3, 4, 5, 6]
// sortAlmostSorted([-1, 1, 0, 2]);         // [-1, 0, 1, 2]
// sortAlmostSorted([2, 1]);                // [1, 2]
// sortAlmostSorted([]);                    // []

sortAlmostSorted([4, 2, 3, 1, 5, 6, 7])