var video = document.getElementById("video");
var playbtn = document.getElementById("play");
var stopbtn = document.getElementById("stop");
var forw = document.getElementById("forw");
var backw = document.getElementById("back");
var fullscreen = document.getElementById("fullscreen");
var ico = document.getElementById("icon");
var progress_color = document.getElementById("progress_color");


$(document).ready(function(){
    $("#play").click(function()         //play-pause function
    {
        if(video.paused)
    {
        video.play();
        ico.className = "bi bi-pause";
    }

    else
    {
        video.pause();
        ico.className = "bi bi-play";
    }
    })


    $("#stop").click(function()          //stop function
    {
        video.pause();
    video.currentTime = 0;
    ico.className = "bi bi-play";
    })


    $("#forw").click(function(){       //forward function
        video.currentTime+=10;
    })


    $("#back").click(function(){            //backward function
        video.currentTime-=10;
    })


    $("#fullscreen").click(function(){         //fullscreen function
        video.requestFullscreen();
    })

});











    

video.addEventListener('timeupdate', function(){        //progrss bar function
    progress_color.style.width = (video.currentTime / video.duration) * 100 + "%";
    if(video.ended)
    {
        ico.className = "bi bi-play";
    }
    
});
    
    




