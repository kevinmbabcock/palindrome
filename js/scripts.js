$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userString = $("#word").val();
    var userString = userString.toLowerCase();
    //var newString = userString.reverse();
    var newString = "";
    for (index = userString.length-1; index >= 0; index -=1) {
      newString = newString + userString.charAt(index);
    }
    //alert(newString);

    if (newString === userString) {
      alert("Yes! This is a palindrome")
    } else {
      alert("Nope. Try again.");
    }
  })
})
