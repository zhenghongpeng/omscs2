(function(){
    angular
        .module("MovieApp")
        .controller("NavController", NavController);

//    function NavController(UserService, $rootScope, $location)
//    {
//        var vm = this;
//        vm.logout = logout;
//
//        function logout()
//        {
//            UserService.logout(function()
//            {
//                $rootScope.currentUser = null;
//                $location.url("/dashboard");
//            });
//        }
//    }
//})();

    function NavController($location, $scope) {
        $scope.$location = $location;
    }
})();