console.log("hey calc");

// this is where arg 1 is sstored
// MVP: update when oper pressed 
// TODO later after MVP: update this on each button click 
// important concept: data the user can see should be directly representative of some data in your app
let num1; 
let oper = null;


$('.num').on('click', (e) => {
  // console.log(e)
  // console.log(e.currentTarget)

  const $jqOfBtnClicked = $(e.currentTarget)
  const numClicked = $jqOfBtnClicked.text()


  // if the person just hit an operator 

    // clear the screen 
    



  // put the number in the display
  if($('#display').text() == "0") {
    $('#display').empty();
  }
  $('#display').append(numClicked);

  // const whatWasThere = $('#display').text()
  // const whatShouldBeInDispAfterClick = whatWasThere + numClicked;
  // $('#display').text(whatShouldBeInDispAfterClick)

})


// when an operator is clicked
    // store number from display in num1
    // store operator -- 
    // clear display


// when eq is clicked
    // store second number
    // do the math
    // store the result  in num1
    // show num1
