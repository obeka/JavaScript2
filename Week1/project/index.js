// your code goes in here
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const button = document.querySelector('#new');

let randomNum = 0;
let controlNum = [0];
button.addEventListener('click', () => {
  do {
    randomNum = Math.floor(Math.random() * quotes.length);
  } while (controlNum[controlNum.length - 1] === randomNum);
  controlNum.push(randomNum);
  quote.textContent = `${quotes[randomNum].quote}`;
  author.textContent = `${quotes[randomNum].author}`
});

const quotes = [{
    quote: "Raise your words, not voice. It is rain that grows flowers, not thunder.",
    author: "- Mawlana Rumi"
  },
  {
    quote: "Stay hungry, stay foolish.",
    author: "- Steve Jobs"
  },
  {
    quote: "Everyone thinks of changing the world, but no one thinks of changing himself.",
    author: "- Leo Tolstoy"
  },
  {
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "- Albert Einstein"
  },
  {
    quote: "If I cannot do great things, I can do small things in a great way.",
    author: "- Martin Luther King"
  },
  {
    quote: "If it works, don't touch it.",
    author: "- Anonym, for coders"
  }
]