var signUpController = {};

signUpController.index = function(req, res) {
  var welcome = {
    headline: 'Get more info',
    inputs: ['Name', 'Email', 'Password']
  };
  message = welcome.headline;
  inputValues = welcome.inputs;
  res.render('signup/signup');
};

signUpController.new = function(req, res) {};

signUpController.create = function(req, res) {};

signUpController.update = function(req, res) {};

signUpController.show = function(req, res) {};

signUpController.edit = function(req, res) {};

signUpController.destroy = function(req, res) {};

module.exports = signUpController;
