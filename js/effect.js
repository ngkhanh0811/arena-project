$(document).ready(function(){
    $(window).scroll(function (){
        if (scrollY>300){
            $("#first").fadeIn(400);
        }
    });
});