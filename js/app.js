console.log("hey calc");

$('.num').on('click', (e) => {
  // console.log(e)
  // console.log(e.currentTarget)
  const $jqOfBtnClicked = $(e.currentTarget)

  const numClicked = $jqOfBtnClicked.text()

  // put the number in the display
  if($('#display').text() == "0") {
    $('#display').empty();
  }
  $('#display').append(numClicked);

  // const whatWasThere = $('#display').text()
  // const whatShouldBeInDispAfterClick = whatWasThere + numClicked;
  // $('#display').text(whatShouldBeInDispAfterClick)

})