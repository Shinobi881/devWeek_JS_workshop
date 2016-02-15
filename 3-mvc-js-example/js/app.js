
window.onload = function() {
  var view = new View()
  var model = new Cat()
  var controller = new Controller(view,model)
  controller.bindListeners()
}

