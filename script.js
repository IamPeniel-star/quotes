var arrayofQuotes = [
    {
        author:"Jim Rohn",
        quotes:"Beware of what you become in pursuit of what you want."
    },
    {
        author:"Epictetus",
        quotes:"it's not what happens to you, but how you react to it that matters."
    },
    {
        author:"Frank Sinatra",
        quotes:"The best revenge is massive success."
    },
    {
        author:"Wayne Gretzy",
        quotes:"You miss 100% of the shots you don't take."
    },
    {
        author:"Nelson Mandela",
        quotes:"Resentment is like drinking poison and waiting for your enemies to die."
    },
    {
        author:"Confucius",
        quotes:"Silence is a true friend who never betrays."
    }
]

function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {
    var randomNumber = randomSelector(arrayofQuotes.length);
    document.getElementById("quoteOutput").innerHTML = '"' + arrayofQuotes[randomNumber].quotes + '"';
    document.getElementById("authorOutput").innerHTML = "_" + arrayofQuotes[randomNumber].author;
}