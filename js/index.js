
var quote1 = {
  author : "― Oscar Wilde",
  quote : "“Be yourself; everyone else is already taken.”"
}
var quote2 = {
  author: "― Marilyn Monroe",
  quote:
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
};
var quote3 = {
  author: "― Frank Zappa",
  quote: "“So many books, so little time.”",
};
var quote4 = {
  author: "― Albert Einstein",
  quote:
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
};
var quote5 = {
  author: "― Marcus Tullius Cicero",
  quote: "“A room without books is like a body without a soul.”",
};
var quote6 = {
  author: "― Mae West",
  quote: "“You only live once, but if you do it right, once is enough.”",
};


var quoteList = [quote1, quote2, quote3, quote4, quote5, quote6 ]

var previousIndex = -1;

function display() {
  var randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quoteList.length);
  } while (randomIndex === previousIndex);

  previousIndex = randomIndex;

  document.getElementById("quoteParagraph").innerHTML =
    quoteList[randomIndex].quote;
  document.getElementById("authorName").innerHTML =
    quoteList[randomIndex].author;
}

