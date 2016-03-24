(function(){
    angular
        .module("MovieApp")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/home",{
                templateUrl: "home.view.html"
            })

            .when("/dashboard",{
                templateUrl: "dashboard/dashboard.view.html",
                controller: "DashboardController as controller"
            })
            .when("/register",
                {
                    templateUrl: "register/register.view.html",
                    controller : "RegisterController as controller"
                })
            .when("/login",
                {
                    templateUrl: "login/login.view.html",
                    controller : "LoginController as controller"
                })
            .when("/profile",
                {
                    templateUrl: "profile/profile.view.html",
                    controller : "ProfileController as controller",
                    resolve    : {
                        loggedin : checkLoggedin
                    }
                })
            .when("/admin",
                {
                    templateUrl: "admin/admin.view.html",
                    controller : "AdminController as controller",
                    resolve    : {
                        admin    : checkAdmin
                    }
                })
            .otherwise({redirectTo: "/home"});


    }
})();


var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
{
    var deferred = $q.defer();

    $http.get('/rest/loggedin').success(function(user)
    {
        if (user !== '0')
        {
            $rootScope.currentUser = user;
            deferred.resolve();
        }
        else
        {
            $rootScope.errorMessage = 'You need to log in.';
            deferred.reject();
            $location.url('/login');
        }
    });

    return deferred.promise;
};

var checkAdmin = function($q, $timeout, $http, $location, $rootScope)
{
    var deferred = $q.defer();

    $http.get('/rest/admin').success(function(user)
    {
        if (user !== '0')
        {
            $rootScope.currentUser = user;
            deferred.resolve();
        }
    });

    return deferred.promise;
};
