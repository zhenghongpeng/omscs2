(function(){
    angular
        .module("MovieApp")
        .controller("DashboardController", dashboardcontroller);


    var $movieTitleTxt;
    var $searchBtn;
    var UDACITY_URL = "https://crossorigin.me/https://udacity.com/public-api/v0/courses";
    var $searchResults;
    var $omscsdescription;
    var $totalResults;
    var $coursehomepage;

    var $omscsname;

    function dashboardcontroller (){

       // alert("Hello from JQurey")
        $movieTitleTxt =$("#movieTitleTxt");
        $searchBtn = $("#searchBtn");
        $searchResults =$("#searchResults tbody")
        $omscsdescription =$("#omscsdescription");

        $omscsname = $("#omscsname");

        $searchBtn.click(searchMovie);
    }

    //function courseDetails(coursehomepage){
    //
    //    //var title = $movieTitleTxt.val();
    //
    //    var url = coursehomepage;
    //
    //    //alert ("url " +url);
    //
    //    $.ajax({
    //        url: url,
    //        success: renderSearchResults
    //    });
    //
    //}


        function searchMovie(){

            //var title = $movieTitleTxt.val();

            var url = UDACITY_URL;

            //alert ("url " +url);

            $.ajax({
                url: url,
                success: renderSearchResults
            });

        }
    function renderSearchResults(response) {

        $searchResults.empty();
        console.log(response);

        var totalResults = response.totalResutls;
        //$totalResults.html(totalResults);
        var courses = response.courses;
        //omscsdescription = omscscourse.description;
        //omscsname = omscscourse.name;
        //omscscoursesarray = omscscourse.courses;


        //console.log(courses);
        for(var m=0; m<courses.length; m++) {
            var course = courses[m];
            var title = course.title;
            var CourseID = course.key;
            var instructor = course.instructors[0];
            var coursehomepage = course.homepage;
            //var instructor = course.instructors;

            //var names ="";

            //for(var i=0; i<instructor.length; m++) {
            //
            //    //names += instructor[i].name
            //    //names +="\n"
            //    console.log(instructor[i].name)
            //}
            console.log(instructor);
            var posterUrl = course.image;
            var track = course.tracks;
            if (track.indexOf("Georgia Tech Masters in CS")>-1)
            {
                var $tr = $("<tr>")
                    .attr("id",coursehomepage)
                    //.attr("href", coursehomepage)
                    .click(courseDetails);

                var $img = $("<img>")
                    .attr("id", CourseID)
                    .attr("src", posterUrl)

                    .addClass("posterThmb")
                    //.click(courseDetails(coursehomepage));

                var $td = $("<td>");
                $td.append($img);
                $tr.append($td);

                $td = $("<td>")
                    .append(title)
                    .appendTo($tr);

                $td = $("<td>")
                    .append(instructor.name)
                    //.append(names)

                    .appendTo($tr);

                $td = $("<td>")
                    .append(CourseID)
                    .appendTo($tr);
                $td = $("<td>")
                    .append(track)
                    .appendTo($tr);

                $searchResults.append($tr);
            }
        }

    }

    function courseDetails(event) {
        console.log(event);
        var $str = $(event.currentTarget);
        var url = $str.attr("id");
        window.open(url, '_blank');

        //$.ajax({
        //    url: url,
        //    success: renderCourssDetails
        //    //success: http
        //});


    }

    //
    //function renderCourssDetails(data){
    //    $('.result').html(data);
    //    alert('Load was performed.');
    //    //window.location.href = "file2.html";
    //};





})();
