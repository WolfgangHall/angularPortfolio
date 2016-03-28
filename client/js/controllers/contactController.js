angular.module('portfolioApp', [])
  .controller('contactController', ['$scope', function($scope){
    this.user = {
      name: '',
      email: '',
      message: ''
    };

    this.sendMessage = function() {
      console.log('A message was sent', this.user);
    };
  }]);