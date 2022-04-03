const quoteData = document.getElementById("quoteDisplay");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuote = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");
var actualData = "";
var auth_name;
var quote;

const displayQuotes = () => {
  const num = Math.floor(Math.random() * 1630);
  quote = actualData[num].text;
  auth_name;
  var tempAuthor = actualData[num].author;
  {
    tempAuthor !== null
      ? (auth_name = `~ ${tempAuthor}`)
      : (auth_name = "~ Unknown");
  }
  quoteData.innerText = quote;
  quoteAuthor.innerText = auth_name;
};

const getQuotesData = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    var data = await fetch(api);
    actualData = await data.json();
    displayQuotes();
  } catch (err) {
    console.log(err);
  }
};

newQuote.addEventListener("click", displayQuotes);

const tweet = () => {
  var tweetQ = `https://twitter.com/intent/tweet?text=${quoteData} ${auth_name}`;
  window.open(tweetQ);
};

tweetMe.addEventListener("click", tweet);

getQuotesData();
