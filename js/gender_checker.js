function checkIt() {
  // Initialize scores
  var girl = 0;
  var boy = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'girl') {
        girl++;
      }
      else if (e.value == 'boy') {
        boy++;
      }
    }

  }

  // Determine result
  var counts = "Girl: " + girl + ", " +
               "Boy: " + boy;

  // What is the highest value?
  var max = Math.max(girl, boy);

  // Form a message
  var message;

  if (max == girl) {
    message = "Ooo la la your a girl!";
  }
  else if (max == boy) {
    message = "Bruh what up you a boy.";
  }


  // Display result
  // document.getElementById('result').innerHTML = counts;
  document.getElementById('result').innerHTML = message;
}
