const tablePath = document.querySelector('#table');
console.log('table path', document.querySelector('#table'));
const tablePathLength = tablePath.getTotalLength();
// Make very long dashes (the length of the path itself)
tablePath.style.strokeDasharray = tablePathLength + ' ' + tablePathLength;

// Offset the dashes so the it appears hidden entirely
tablePath.style.strokeDashoffset = tablePathLength;

// When the page scrolls...
window.addEventListener("scroll", function(e) {

// What % down is it? 
var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  
// Length to offset the dashes
var drawLength = tablePathLength * scrollPercentage;

// Draw in reverse
tablePath.style.strokeDashoffset = tablePathLength - drawLength;
if (scrollPercentage >= 0.99) {
  tablePath.style.strokeDasharray = "none";
} else {
  tablePath.style.strokeDasharray = tablePathLength + ' ' + tablePathLength;
}

});

const table = 
