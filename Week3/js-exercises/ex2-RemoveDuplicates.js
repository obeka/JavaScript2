/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */

// WRITE YOUR FUNCTION HERE

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

let uniqueLetters = [];
// Index of checks if the array has the letter and returns the index value of the letter
//If it returns -1, it means the array does'nt have the letter.
letters.forEach(letter => {
  if (uniqueLetters.indexOf(letter) === -1) {
    uniqueLetters.push(letter);
  }
});
console.log(uniqueLetters);