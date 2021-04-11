// Write a function called findMultiples. Given an array of numbers and a minimum count,
// return an array of all the numbers that appear in the array at least the minimum count
//  number of times. (The order of the numbers in the output array doesn’t matter.)


/* return an array of all the numbers that appear in the array at least the minimum count */
function findMultiples(numbers, targetValue) {
    let mappedNums = numbers.reduce(function(object, number){
        // take into account if the key/value doesnt exist, set it to one
        object[number] = ++object[number] || 1
        return object
    }, {})
    // return string of values >= the target value 
    return Object.keys(mappedNums).filter(function(num) {
        return mappedNums[num] >= targetValue;
    })
}

/* TO WHOEVER IS READING THIS CODE.... I wasnt quite sure how the time complexity worked out in 
    this script. would love to go over that with you to get a better understanding */

console.log(findMultiples([5, 6, 7, 5, 6, 5], 2))