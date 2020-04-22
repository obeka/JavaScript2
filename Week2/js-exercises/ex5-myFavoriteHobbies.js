/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */
const html = document.querySelector('html');
const ul = document.createElement('ul');

function createHTMLList(arr) {
  // your code goes in here
  arr.forEach(hobby => {
    const li = document.createElement('li');
    li.innerHTML = `<p>${hobby}</p>`;
    ul.appendChild(li);
  });

  html.appendChild(ul);
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

createHTMLList(myHobbies)