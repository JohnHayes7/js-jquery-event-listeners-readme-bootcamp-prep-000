function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $('form').on('keydown', function(key){
    if(event.key == 'G'){
      alert("You have pressed 'G'");
    }
  });
}

$(document).ready(function(){

// call functions here

});
