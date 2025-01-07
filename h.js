const data = window.location.search;

//console.log(myname);
const fname = document.getElementById('fname');
const timer = document.getElementById('timer');
const wisher = document.getElementById('wisher');
let urlParam = new URLSearchParams(data);

let n = urlParam.get('n') || "Hrishikesh";
let d = urlParam.get('d') || "1.1";
let m = urlParam.get('m') || "Always";

console.log(typeof(urlParam.get('d')));
console.log(m);
console.log(n);



const input = d; // Example input
const [day, month] = input.split(".").map(Number); // Split and convert to numbers

// Create a new Date object with the current year
const year = new Date().getFullYear();
const date = new Date(year, month - 1, day); // JavaScript months are 0-based



// Ensure the preloader shows for 5 seconds before hiding
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
      // Fade out the preloader
      const preloader = document.getElementById("preloader");
      preloader.classList.add("fade-out");

      // Wait for the fade-out effect to complete before hiding
      setTimeout(() => {
          preloader.style.display = "none"; // Fully hide the preloader
          document.getElementById("content").style.display = "block"; // Show main content
      }, 1000); // Match this with the CSS transition duration
  }, 1000); // 000ms = 1 seconds
});









// Countdown function
function startCountdown(targetDate) {
    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = targetDate - now;
  
      if (timeRemaining <= 0) {
        clearInterval(interval);
        //console.log("Countdown finished!");
        
        startGreetings();

        return;
      }
      else{
        document.getElementById('countdown').style.display = 'flex';
        // Calculate time components
        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        days = String(days).padStart(2,"0");
        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");

        
        // Display countdown
        // console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        timer.textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;
        }

    }, 1000); // Update every second
  }

  // Start the countdown
startCountdown(date);



function startGreetings(){
  document.getElementById('greetings').style.display = 'flex';
  fname.textContent = String(n);
  wisher.textContent = String("Yours, "+m+".");
}



let BDquotes = [
  "🥳 Cheers to another year of being amazing! Have the best birthday ever!",
  "💫Another trip around the sun and still glowing brighter than ever!",
  "🌻Another year older, wiser, and way cooler",
  "🎉Here's to a year of dreams fulfilled, goals achieved, and memories created",
  "🪐May your day be full of cosmic joy and stellar surprises.",
  "💖May your birthday be as special and incredible as you make everyone feel every day.",
  "🥂May your day be sweeter than your favorite dessert and just as memorable",
  "✨ Keep shining and spreading your magic.",
];
BDquotes.push(`🎂Go ahead, eat all the cake you want today—it's your day ${n}!`);

const quoteContainer = document.getElementById('slider');
    let currentIndex = 0;

    // Function to handle showing and animating quotes
    function displayQuote() {
      const allQuotes = document.querySelectorAll('.quote');

      // Hide all quotes
      allQuotes.forEach(quote => {
        quote.style.display = 'none'; // Hide the quote
        quote.style.animation = 'none'; // Reset the animation
      });

      // Show and animate the current quote
      const currentQuote = allQuotes[currentIndex];
      currentQuote.style.display = 'block';
      currentQuote.style.animation = 'opacity 6s infinite';

      // Move to the next quote
      currentIndex = (currentIndex + 1) % BDquotes.length;
    }

    // Add quotes to the DOM
    BDquotes.forEach(quote => {
      const quoteDiv = document.createElement('div');
      quoteDiv.classList.add('quote');
      quoteDiv.textContent = quote;
      quoteContainer.appendChild(quoteDiv);
    });

    // Start displaying quotes
    setTimeout(() => {
      displayQuote(); // Show the first quote
      setInterval(displayQuote, 6000); // Change quote every 3 seconds
    }, 5000);

