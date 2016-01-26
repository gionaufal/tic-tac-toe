var turn = 0;
var icon = 'X';
var player = 'Player 1'


//clicking event. Switch from X to O and draw the corresponding icon every turn, plus incrementing the turn counter
$('.piece').click(function(){
  if($(this).html()==""){
    if (turn%2!==0) {
      icon = "O";
      player = 'Player 2';
    } else {
      icon = 'X';
      player = 'Player 1';
    }
    $(this).html(icon);
    checkWin();
    turn++
  }
});
//restart the game. Maybe better to remove the button and do this with a timer function.
$('#restart').click(function(){
  $('.piece').html('');
  $('.piece').removeClass('won');
  turn = 0;
});
//check if any of the winning possibilities are true
function checkWin(){
  if ($('#p1').html()===icon && $('#p2').html()===icon && $('#p3').html()===icon ) {
    $('#p1, #p2, #p3').addClass('won');
    alert(player + ' won!');
  } else if ($('#p4').html()===icon && $('#p5').html()===icon && $('#p6').html()===icon ) {
    $('#p4, #p5, #p6').addClass('won');
    alert(player + ' won!');
  } else if ($('#p7').html()===icon && $('#p8').html()===icon && $('#p9').html()===icon ) {
    $('#p7, #p8, #p9').addClass('won');
    alert(player + ' won!');
  } else if ($('#p7').html()===icon && $('#p4').html()===icon && $('#p1').html()===icon ) {
    $('#p7, #p4, #p1').addClass('won');
    alert(player + ' won!');
  } else if ($('#p8').html()===icon && $('#p5').html()===icon && $('#p2').html()===icon ) {
    $('#p8, #p5, #p2').addClass('won');
    alert(player + ' won!');
  } else if ($('#p9').html()===icon && $('#p6').html()===icon && $('#p3').html()===icon ) {
    $('#p9, #p6, #p3').addClass('won');
    alert(player + ' won!');
  } else if ($('#p7').html()===icon && $('#p5').html()===icon && $('#p3').html()===icon ) {
    $('#p7, #p5, #p3').addClass('won');
    alert(player + ' won!');
  } else if ($('#p9').html()===icon && $('#p5').html()===icon && $('#p1').html()===icon ) {
    $('#p9, #p5, #p1').addClass('won');
    alert(player + ' won!');
  }
  //check if all the squares are taken
  else if (turn === 8) {
    alert("It's a draw!")
  }
}

function MachineAI() {
  icon = 'O';
  player = 'Computer';
  switch (true) {
    case $('#p7').text() == '':
      $('#p7').html(icon);
      break;
    case $('#p8').text()== '':
      $('#p8').html(icon);
      break;
    case $('#p9').text()== '':
      $('#p9').html(icon);
      break;
    case $('#p4').text()== '':
      $('#p4').html(icon);
      break;
    case $('#p5').text()== '':
      $('#p5').html(icon);
      break;
    case $('#p6').text()== '':
      $('#p6').html(icon);
      break;
    case $('#p1').text()== '':
      $('#p1').html(icon);
      break;
    case $('#p2').text()== '':
      $('#p2').html(icon);
      break;
    case $('#p3').text()== '':
      $('#p3').html(icon);
      break;
  }}
