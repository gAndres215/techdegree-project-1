/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * sets the quote to change every 20 seconds using by reusing the print quote function
***/

let time = setInterval(printQuote, 20000);

/**
 * set the color to a new rgb every 5 seconds
 */
let colorTime = setInterval(setBackgroundColor, 5000);


/*** 
 * An array of objects that that hold the properties for the quotes
***/
let quotes = [{
  quote: "The way to get started is to quit talking and begin doing"
  , source: "Walt Disney"
  , tag: "Inspirational"
},
{
  quote: "Don't let yesterday take up too much of today."
  , source: "Will Rogers"
  , tag: "Inspirational"
},
{
  quote: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you."
  , source: "Steve Jobs"
  , tag: "Inspirational"
},
{
  quote: "People who are crazy enough to think they can chage the world, are the ones who do."
  , source: "Rob Siltanen"
  , tag: "Inspirational"
},
{
  quote: "We may encounter many defeats but we must not be defeated."
  , source: "Maya Angelou"
  , tag: "Inspirational"
},
{
  quote: "As we live a life of ease, Everyone of us has all we need."
  , source: "The Beatles"
  , citation: "Yellow Submarine Album"
  , year: 1969
}];




/***
 * `getRandomQuote` function that uses the length of the quotes array, making it dynamic allowing for more quotes
 * to be added without breaking the app
***/
function getRandomQuote() {
  let ranNum = Math.floor(Math.random() * quotes.length);

  return quotes[ranNum];
}


/***
 * `printQuote` function that builds the html string using the properties of the objects in the quotes array.
 * Uses three if statement to check for the additional properties of citation, tag, and year.
***/
function printQuote() {
  let ranQuote = getRandomQuote();
  let htmlString = '<p class="quote">' + ranQuote.quote + '</p>' +
    '<p class="source">' + ranQuote.source;

  if (ranQuote.hasOwnProperty('citation')) {
    htmlString += '<span class="citation">' + ranQuote.citation + '</span>';
  }

  if (ranQuote.hasOwnProperty('year')) {
    htmlString += '<span class="year">' + ranQuote.year + '</span>';
  }
  if (ranQuote.hasOwnProperty('tag')) {
    htmlString += '<span class="year">' + ranQuote.tag + '</span>';
  }

  htmlString += '</p>';
  document.getElementById('quote-box').innerHTML = htmlString;
}

/***
* random number generator for rgb integer
***/
function generateRGB() {
  let rgb = Math.floor(Math.random() * 256);
  return rgb;
}

/**
 * function that sets the new rgb color as the background when clicked
 */
function setBackgroundColor() {
  let rgb1 = generateRGB();
  let rgb2 = generateRGB();
  let rgb3 = generateRGB();

  document.body.style.backgroundColor = "rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")";
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", setBackgroundColor, false);