(function()
{
  angular
    .module("MovieApp")
    .controller("AdminController", AdminController);

  function AdminController(UserService)
  {
    var vm = this;
    vm.addUser = addUser;
    vm.removeUser = removeUser;
    vm.selectUser = selectUser;
    vm.updateUser = updateUser;
    vm.user = {};

    function updateUser(user)
    {
      UserService.update(user, function(response)
      {
        findAllUsers(setAllUsers);
      });
    }

    function selectUser(userId)
    {
      UserService.findUserById(userId, function(response)
      {
        vm.user = response;
      });
    }

    function removeUser(userId)
    {
      UserService.removeUser(userId, function(response)
      {
        findAllUsers(setAllUsers);
      });
    }

    function addUser(newUser)
    {
      UserService.createUser(newUser, function(response)
      {
        findAllUsers(setAllUsers);
      });
    }

    function findAllUsers(callback)
    {
      UserService.findAllUsers(callback);
    }

    function setAllUsers(users)
    {
      vm.users = users;
    }

    findAllUsers(setAllUsers);
  }
})();