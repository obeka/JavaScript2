/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(f1(x));
console.log(x)

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/* Firstly, the f1 function takes an argument as a number. Numbers are primitive values in javascript. Any changes you make to
primitive values inside the function does not affect the argument that we provide. So, js copies the x inside f1 function to
val, and changes will be applied to val variable, not x. However, the f2 function takes an object as an argument. Objects are reference values. So, f2 takes the object as an argument and a reference is created for val as same as y object. Then,
the reference changes to the new value for both objects. The reference of y object is now changed and also it's property value.
To speak, if we pass arguments by value, functions do not affect but if we pass arguments by reference, functions 
affect. */