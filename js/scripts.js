function roll() {
  var randomNumber = (Math.floor(Math.random()*6)+1);
  return randomNumber;
}







// NOTE: Begins User Interface Logic.

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var result = roll();
    console.log(result);



  });
});
