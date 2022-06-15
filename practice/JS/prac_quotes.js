// author, text요소를 가지는 객체 10개 가지는 배열
const quotes = [
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Not how long, but how well you have lived is the main thing.",
    author: "Seneca",
  },
  {
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
  },
  {
    quote:
      "Money and success don’t change people; they merely amplify what is already there.",
    author: "Will Smith",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    author: "Steve Jobs",
  },
];

// #quote 의 자식 span 2개 불러오기
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 랜덤의 숫자 불러오기
const randomQuote = Math.floor(Math.random() * quotes.length);

// 각 span에 quote와 author를 넣어주기
quote.innerText = quotes[randomQuote].quote;
author.innerText = quotes[randomQuote].author;
