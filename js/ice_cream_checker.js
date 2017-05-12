function checkIt() {
  // Initialize scores
  var nice = 0;
  var brave = 0;
  var playful = 0;
  var adorable = 0;
  var lively = 0;
  var calm = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'nice') {
        nice++;
      }
      else if (e.value == 'brave') {
        brave++;
      }
      else if (e.value == 'playful') {
        playful++;
      }
      else if (e.value == 'adorable') {
        adorable++;
      }
      else if (e.value == 'lively') {
        lively++;
      }
      else if (e.value == 'calm') {
        calm++;
      }
    }

  }

  // Determine result
  var counts = "Nice: " + nice + ", " +
               "Brave: " + brave  + ", " +
               "Playful: " + playful + ", " +
               "Adorable: " + adorable + ", " +
               "Lively: " + lively  + ", " +
               "Calm: " + calm;

  // What is the highest value?
  var max = Math.max(nice, brave, playful, adorable, lively, calm);

  // Form a message
  var message;

  if (max == nice) {
    message = "Thank you so much, you're so nice!";
  }
  else if (max == brave) {
    message = "Wow that was crazy, you're so brave!.";
  }
  else if (max == playful) {
    message = "You are so fun to be around, you are so playful!";
  }
  else if (max == adorable) {
    message = "Omg that is so cute! You are so adorable!";
  }
  else if (max == lively) {
    message = "Woah you have so much energy, you're so lively!";
  }
  else if (max == calm) {
    message = "Dude your so chill, definitely a calm person.";
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result').innerHTML = message;
}
