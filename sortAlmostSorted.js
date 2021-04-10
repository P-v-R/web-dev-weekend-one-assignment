
// Write a function called sortAlmostSorted which accepts an array of numbers that are sorted except for a single pair and returns a sorted array.

// function only need to loop through the array once, 
// function will raise two pointers, pointer one(p1) is assigned when our loop finds the first out of order number
// the second pointer(p2) will be assigned when we find the second out of place number

// to find the miss-matched numbers we need to look for...
    // p1 = if numbers[idx] > numbers[idx+1]
    // p2 = if numbers[idx] < numbers[idx-1] AND p1 has been already been found

// if the array is less than one, or already sorted, return original array

 


/* analyzes a string one #pair away from being sorted and returns the string completely sorted    [1,2,4,5,3] >>> [1,2,3,4,5] */
function sortAlmostSorted(numbers) {
    let p1;
    let p2;

    if (numbers.length < 1){
        return numbers
    }
    for(let i = 0;i<numbers.length; i++){
        if(numbers[i] > numbers[i+1] && !p1){
            p1 = i
        } else if (numbers[i] < numbers[i-1]){
            p2 = i
        } else if (i === numbers.length && !p1 && !p2){
            return numbers
        }
    }
    [numbers[p1], numbers[p2]]=[numbers[p2], numbers[p1]]
    return numbers
}


sortAlmostSorted([1, 2, 3, (7), 5, 6, (4)]); // [1, 2, 3, 4, 5, 6, 7]
sortAlmostSorted([1, 2, 6, 4, 5, 3]);    // [1, 2, 3, 4, 5, 6]
sortAlmostSorted([-1, 1, 0, 2]);         // [-1, 0, 1, 2]
sortAlmostSorted([2, 1]);                // [1, 2]
sortAlmostSorted([]);                    // []