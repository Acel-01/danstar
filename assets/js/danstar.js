AOS.init({
    duration: 1200,
})

// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2021 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements
  document.getElementById("hero2id1").innerHTML = days;
  document.getElementById("hero2id2").innerHTML = hours;
  document.getElementById("hero2id3").innerHTML = minutes;
  document.getElementById("hero2id4").innerHTML = seconds;
  

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hero2id1").innerHTML = 'NOW';
    document.getElementById("hero2id2").innerHTML = 'NOW';
    document.getElementById("hero2id3").innerHTML = 'NOW';
    document.getElementById("hero2id4").innerHTML = 'NOW';
  }
}, 1000);