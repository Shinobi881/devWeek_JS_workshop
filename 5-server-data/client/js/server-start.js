//refactor to work with JSON server
//refactor to work with JSON server
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


var View=function(){

}
View.prototype={
  getAnimalRow: function(row){

  },
  advance: function(animal, row){
  $("tr").eq(row).children("td").removeClass("active");
  $("tr").eq(row).children("td").eq(animal.position).addClass("active");

  },
  initialize: function(){
  $("td").removeClass("active");
  $("tr").first().children("td").eq(0).addClass("active");
  $("tr").last().children("td").eq(0).addClass("active");
  },
  displayWinner: function(winner){
    alert("The winner is: "+ winner.name + " with a score of " + winner.position);
  }
}




var Controller = function(animals, view,size){
  this.view=view
  this.size=size;
  this.animals = animals
  this.winner = null
  this.keyUpEventHandler();
  this.initialize();
}
Controller.prototype.initialize = function (){
  this.animals.forEach(function(animal){ animal.reset() })
  this.winner = null;
  this.view.initialize();
}
Controller.prototype.move= function(animal,row){
  animal.advance()
  this.view.advance(animal,row)
}
Controller.prototype.keyUpEventHandler = function() {
    var that = this; //replace with binding
    document.addEventListener('keyup', function(evt) {
      that.animals.forEach(function(animal,index){
        if (String.fromCharCode(evt.keyCode) === animal.key){
          that.move(animal,index);
          that.checkWinner(animal);
          if (that.winner !==null){
            that.view.displayWinner(that.winner);
            that.initialize();
          };
        }
      })
    });
  };

 Controller.prototype.checkWinner=function(animal){
    if(animal.position >= this.size){
      this.winner=animal;
    }
  }

//move to a factory
 getAnimalsFromServer=function(callback){
   $.ajax({
    url: "http://localhost:3030/animals"
  }).done(function(data){
      callback(data)
  }).fail(function(){
    console.log("fail")
  });

}

//create a factory
function createAnimals(){
  var animals =[]
  animals.push(new Animal("fluffy", "cat","C",0) );
  animals.push(new Animal("fido", "dog", "D",1) );
  return animals
}

$(document).ready(function(){
  var view=new View();
  var animalData =createAnimals();
  game=new Controller(animalData,view, 9);
 
});
