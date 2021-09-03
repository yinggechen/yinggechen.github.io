$(document).ready(function(){



var word2 = [
  "GET A JOB",
  "GET MARRIED",
  "GET OUT OF BED",
  "MAKE FRIENDS",
 
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];



$( ".word2" ).html(randomWord2);


});