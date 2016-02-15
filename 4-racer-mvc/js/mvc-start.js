//Refactor this to MVC - or start from your own solution.
//Create Model, View, Controller and app.js to run it.

//Hint: Model - Animal, Controller ~= Game. 

//Define an Animal class
var Animal = function(name, species,key,row){
  this.species = species;
  this.name=name;
  this.position=0;
  this.key =key;
}

Animal.prototype.reset=function(){
  this.position=0;
}

Animal.prototype.advance=function(){
  this.position += 1;
}


var Game = function(animals, size){
  this.size=size;
  this.animals = animals
  this.winner = null
  this.keyUpEventHandler();
  this.initialize();
}

Game.prototype.initialize = function (){
  this.animals.forEach(function(animal){ animal.reset() })
  this.winner = null;
  $("td").removeClass("active");
  $("tr").first().children("td").eq(0).addClass("active");
  $("tr").last().children("td").eq(0).addClass("active");
}

Game.prototype.move= function(animal,row){
  animal.advance()
  $("tr").eq(row).children("td").removeClass("active");
  $("tr").eq(row).children("td").eq(animal.position).addClass("active");
}

Game.prototype.keyUpEventHandler = function() {
    var that = this; //replace with binding
    document.addEventListener('keyup', function(evt) {
      that.animals.forEach(function(animal,index){
        if (String.fromCharCode(evt.keyCode) === animal.key){
          that.move(animal,index);
          that.checkWinner(animal);
          if (that.winner !==null){
            that.display();
            that.initialize();
          };
        }
      })
    });
  };

  Game.prototype.checkWinner=function(animal){
    if(animal.position >= this.size){
      this.winner=animal;
    }
  }

  Game.prototype.display = function(){
    alert("The winner is: "+ this.winner.name + " with a score of " + this.winner.position);
  }


function createAnimals(){
  var animals =[]
  animals.push(new Animal("fluffy", "cat","C",0) );
  animals.push(new Animal("fido", "dog", "D",1) );
  return animals
}

  $(document).ready(function(){
    var animals=createAnimals();
    game=new Game(animals, 9);

  });