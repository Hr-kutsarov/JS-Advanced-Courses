// Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 
// The input comes as two parameters – an array of strings and a number. The second parameter is the amount of rotation you need to perform.
// The output is the resulting array after the rotations. The elements should be printed on one line, separated by a single space.


function solve(array, n) {
    for (let i = 0; i < n; i++) {
        let a = array.pop()
        array.unshift(a)
    }
    return array.join(' ')
 }


console.log(solve(['1', 
'2', 
'3', 
'4'], 
2
))

console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
))