const barrowPath = document.querySelector('#barrow');
const barrowPathLength = barrowPath.getTotalLength();

const chickenOnePath = document.querySelector('#chicken');
const chickenOnePathLength = chickenOnePath.getTotalLength();

const chickenTwoPath = document.querySelector('#chicken2');
console.log('chicken 2', chickenTwoPath);
const chickenTwoPathLength = chickenTwoPath.getTotalLength();
// Make very long dashes (the length of the path itself)
barrowPath.style.strokeDasharray = barrowPathLength + ' ' + barrowPathLength;
chickenOnePath.style.strokeDasharray = chickenOnePathLength + ' ' + chickenOnePathLength;
chickenTwoPath.style.strokeDasharray = chickenTwoPathLength + ' ' + chickenTwoPathLength;

// Offset the dashes so the it appears hidden entirely
barrowPath.style.strokeDashoffset = barrowPathLength;
chickenOnePath.style.strokeDashoffset = chickenOnePathLength;
chickenTwoPath.style.strokeDashoffset = chickenTwoPathLength; 

// When the page scrolls...
window.addEventListener("scroll", function (e) {

  // What % down is it? 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  // Length to offset the dashes
  var barrowDrawLength = barrowPathLength * scrollPercentage;

  // Draw in reverse
  barrowPath.style.strokeDashoffset = barrowPathLength - barrowDrawLength;
  if (scrollPercentage >= 0.99) {
    barrowPath.style.strokeDasharray = "none";
  } else {
    barrowPath.style.strokeDasharray = barrowPathLength + ' ' + barrowPathLength;
  }
});
