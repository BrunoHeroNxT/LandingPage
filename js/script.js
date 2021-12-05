var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function(){
    window.scrollTo(0,0);
});

var btnContact = document.querySelector("#scroll-contact");

btnContact.addEventListener("click", function(){
    window.scrollTo(0, 2200);
});

var btnService = document.querySelector("#scroll-service")

btnService.addEventListener("click", function(){
    window.scrollTo(0,1500);
});

var btnAbout = document.querySelector("#scroll-about");

btnAbout.addEventListener("click", function(){
    window.scrollTo(0,800);
});

var btnTeam = document.querySelector("#scroll-team");

btnTeam.addEventListener("click", function(){
    window.scrollTo(0, 3100);
});

