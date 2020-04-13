/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

const body = document.querySelector('body');
const nickName = document.querySelector('#nickname');
const favFood = document.querySelector('#fav-food');
const hometown = document.querySelector('#hometown');
const liAll = document.querySelectorAll('li');

//chnaging body font family
body.style.fontFamily = "Arial, sans-serif"

//adding personel info
nickName.textContent = 'obeka';
favFood.textContent = 'fried cornbreaded anchovies';
hometown.textContent = 'Turkey, Ankara';

//Iterating through all li elements adn addind class
liAll.forEach(li => li.classList.add('list-item'));

//creating a img 
const profilePic = document.createElement('img');
profilePic.setAttribute('src', "https://i.postimg.cc/3ryssJp1/Webp-net-resizeimage.jpg");
body.appendChild(profilePic);