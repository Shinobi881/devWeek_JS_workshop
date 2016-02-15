//Write your JS here
// Copy to the Chrome Console to run.
// Create a Class (using object constructor) for an Animal class with:
var Animal = function(species, name) {
  // species
  this.species = species;
  // name
  this.name = name;
  // position 0 to 20
  this.position = 0;
}

  // advance method - changes position
Animal.prototype.advance = function(moveAmount){
   this.position += moveAmount;
};

// Create 3 animal instances.
var dog = new Animal('canus', 'Bruno');
dog.advance(2);

var cat = new Animal('felis', 'Sylvester');
cat.advance(3);

var cobra = new Animal('serpent', 'SnakeySnake');
cobra.advance(5);

// Verify you can call advance on each instance.
console.log(dog.position, cat.position, cobra.position);