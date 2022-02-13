const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },

    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron",
    },

    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },

    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead",
    },

    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin",
    },

    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
        author: "Helen Keller",
    },

    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle",
    },

    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },

    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth",
    },

    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author: "Dr. Seuss",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;