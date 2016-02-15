//Code from the original game
GAME_SIZE=8

function createAnimals(){
  var cat={name:"fluffy", position:0, key:"C"};
  var dog={name:"fido", position:0, key:"D"};
  return [cat, dog]
}

var advance=function(animal){
  animal.position += 1;
}

var displayAdvance= function(animal, row){
  //select the row - remove active
  $("tr").eq(row).children("td").removeClass("active");
  $("tr").eq(row).children("td").eq(animal.position).addClass("active");
}

var checkWinner=function(animals){
  for(i=0;i<animals.length;++i){
   if (animals[i].position >= GAME_SIZE){
    return animals[i]
  }
}
return null
}

var display = function(winner){
  alert("The winner is: "+ winner.name + " with a score of " + winner.position);
}

function initializeGame(){
  animals=createAnimals();
  winner = null;
  $("td").removeClass("active");
  $("tr").first().children("td").eq(0).addClass("active");
  $("tr").last().children("td").eq(0).addClass("active");

}

$(document).ready(function(){

animals=createAnimals();
winner=null; //global until we have more objects.
initializeGame();

$(document).on("keyup",function(e){
  e.preventDefault();
  animals.forEach(function(animal,index){
      if(String.fromCharCode(e.keyCode) === animal.key){
        advance(animal)
        displayAdvance(animal, index)
      } 
  });
  winner = checkWinner(animals);
  if (winner !== null){
    display(winner);
    initializeGame();
  }

});

});
