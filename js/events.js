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
  $('form').on('keydown', function(){
    if(key.which == 71){
      alert("You have pressed 'G'")
    }
  })
}

$(document).ready(function(){

// call functions here

});
