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
$('.eq').on('click', (e) => {
    // get second number
    const num2 = $('#display').text()

    // do the math -- nominally this owuld be an if-else with a 
    // condition for each operator. for speed we will just start with +
    const result = parseInt(num1, 10) + parseInt(num2, 10)

    // show num1 in display
    $('#display').text(result)  

    // store the result in num1 for next time
    num1 = result
})
