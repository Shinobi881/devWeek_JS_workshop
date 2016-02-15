
function Controller(display,model) {
  this.display = display;
  this.model = model;
}
Controller.prototype = {
  bindListeners:  function() {
    var button = this.display.getButton()
    button.addEventListener('click',
      this.moveModel.bind(this)) },
  moveModel: function() {
    this.model.move()
    var newLocation = this.model.location
    this.display.setLocation(newLocation) }
}