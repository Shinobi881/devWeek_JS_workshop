
function View() {
  this.modelSelector = '#runningCatImg'
  this.buttonSelector = 'button'
}
View.prototype = {
  getModel: function() {
    return document.querySelector(this.modelSelector) },
  setLocation: function(location) {
    var model = this.getModel()
    model.style.left = location;  },
  getButton: function() {
    return document.querySelector(this.buttonSelector) }
}

