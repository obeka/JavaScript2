/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */

// WRITE YOUR FUNCTION HERE

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(array) {
  array.forEach((item, index, self) => {
    while (index !== self.lastIndexOf(item)) {
      self.splice(array.lastIndexOf(item), 1);
    }
  });

  return array;
}

removeDuplicates(letters);
console.log(letters);