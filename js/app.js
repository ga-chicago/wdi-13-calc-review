console.log("hey calc");

// this is where arg 1 is sstored
// MVP: update when oper pressed 
// TODO later after MVP: update this on each button click 
// important concept: data the user can see should be directly representative of some data in your app
let num1; 
let oper = null;

// use this clear display at start of second number
let operWasJustClicked = false


$('.num').on('click', (e) => {
  // console.log(e)
  // console.log(e.currentTarget)

  const $jqOfBtnClicked = $(e.currentTarget)
  const numClicked = $jqOfBtnClicked.text()


  // if the person just hit an operator 
  if(operWasJustClicked) {
    // clear the screen 
    $('#display').empty();
    operWasJustClicked = false;
  }


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
$('.oper').on('click', (e) => {
    // store number from display in num1
    num1 = $('#display').text();
    // store operator -- 
    oper = $(e.currentTarget).text(); 

    // this will cause display to get cleared next time 
    operWasJustClicked = true
  
})


// when eq is clicked
    // store second number
    // do the math
    // store the result  in num1
    // show num1
