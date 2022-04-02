const quoteData = document.getElementById("quoteDisplay");
const quoteAuthor = document.getElementById("quoteAuthor");
var actualData = "";

const displayQuotes = () => {
  const num = Math.floor(Math.random() * 10);
  const quote = actualData[num].text;
  const author = `~ ${actualData[num].author}`;
  quoteData.innerText = quote;
  quoteAuthor.innerText = author;
};

const getQuotesData = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    const data = await fetch(api);
    actualData = await data.json();
    displayQuotes();
  } catch (err) {
    console.log(err);
  }
};

getQuotesData();
