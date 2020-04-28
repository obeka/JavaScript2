/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();
console.log(a)

/* The output will be 12. Firstly, we see a closure in here, which is a function returns a function. So when a func
tion returns a function, the inner returning function has access to it's self scope and the variables in parent function's 
scope. So, firstly a is defined as 10 in the global scope. Then, x function is defined and js creates a local scope for the
x function. Inside the x function, a is reassigned to 12 and within x function a is 12 . Then we execute the x function,
and it returns alert(a) but a is not defined in the inner function. As we said, inner function has access to it's parent functon,
so it looks for a in the scope of it's parent, which is x function. And here we are, inner function sees the a in it's parent
and use it inside itself. Lastly, we see an alert says 12.*/