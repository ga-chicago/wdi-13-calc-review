console.log("hey calc");

$('.num').on('click', (e) => {
  // console.log(e)
  // console.log(e.currentTarget)
  const $jqOfBtnClicked = $(e.currentTarget)
  console.log($jqOfBtnClicked.text())

})