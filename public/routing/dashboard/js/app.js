(function(){
    $(init);
    var $movieTitleTxt;
    var $searchBtn;
    var UDACITY_URL = "https://udacity.com/public-api/v0/courses";
    var $searchResults;
    var $omscsdescription;

    var $omscsname;

    function init (){

       // alert("Hello from JQurey")
        $movieTitleTxt =$("#movieTitleTxt");
        $searchBtn = $("#searchBtn");
        $searchResults =$("#searchResults tbody")
        $omscsdescription =$("#omscsdescription");

        $omscsname = $("#omscsname");

        $searchBtn.click(searchMovie);
    }

        function searchMovie(){

            //var title = $movieTitleTxt.val();

            var url = UDACITY_URL;

            //alert ("url " +url);

            $.ajax({
                url: url,
                success: renderSearchResults
            });

        }
    function renderSearchResults(response){



        var totalResults = response.totalResutls;
        var omscscourse = response.tracks[5];
        omscsdescription = omscscourse.description;
        omscsname = omscscourse.name;
        omscscoursesarray = omscscourse.courses;


        //console.log(omscscourse);
    //
        for (var m=0; m<omscscoursesarray.length;m++){

            var courseID = omscscoursesarray[m];
            //console.log(movie);


            var $tr =$("<tr>")
                .attr("id", courseID)
                .click("fetchCourseDetails");

            //var $img =$("<img>")
            //    .attr("src", posterUrl)
            //    .addClass("posterThmb");

            //var $td = $("<td>")
            //    .append($img)
            //    .appendTo($tr)

            var $td = $("<td>")
                .append(title)
                .appendTo($tr)

            var $td = $("<td>")
                .append(year)
                .appendTo($tr)

            var $td = $("<td>")
                .append(imdbID)
                .appendTo($tr)


            $searchResults.append($tr);

        }

    //
    }

    //function fetchMovieDetails(event){
    //
    //    //alert("fetchMovieDetails");
    //    console.log(event);
    //}

})();
