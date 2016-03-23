(function()
{
  angular
    .module("MovieApp")
    .controller("LoginController", LoginController);

  function LoginController(UserService, $rootScope, $location)
  {
    var vm = this;
    
    vm.login = login;
    
    function login(user)
    {
      UserService.login(user, function(response)
      {
        if(response != null)
        {
          $rootScope.currentUser = response;
          $location.url("/profile");
        }
        else
        {
          vm.message = "User does not exist";
        }
      });
    }
  }
})();