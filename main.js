'use strict';

$(document).ready(init);

var numOfStars;



function init() {

  getStars();

}

$('#numberBox').on('click', '.number' , clickNum);
$('#roll').on('click', roll);


var count = 0;

function roll() {
  if (count < 3){
    getStars()
    count++;
  } 
  if (count === 3){ 
    alert('No more turns\nPress restart to play again!')
  }

}

function  getStars(){
  $('#starBox').empty();
  for (var i = 0; i < Math.floor(Math.random()*9+1); i++){
    var star = $('<div>').addClass('stars');
    $('#starBox').append(star).text();
  };
  numOfStars = i;
  console.log(numOfStars)


  
}

function clickNum (){  //function to click the numbers
  $(this).toggleClass('selected');
};


$('#confirm').click(function(){
  var sum = 0;
  $('.selected').each(function(){
   var boxNum = $(this).data('number');
   sum = sum + boxNum;
 });
  if (sum === numOfStars){
    $('.selected').off('click');
    $('.selected').addClass('disabled');
    $('.selected').removeClass('selected');
    getStars();
  } else {
   alert('Try again!');
 }
});

function win (){
  if($('.disabled').length === 9 ){
    alert('You Win!'); 
  }
}

$('#restart').click(function(){  //function to restart the game

  location.reload()

});

