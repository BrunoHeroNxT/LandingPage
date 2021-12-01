var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function(){
    window.scrollTo(0,0);
});

var btnContact = document.querySelector("#scroll-contact");

btnContact.addEventListener("click", function(){
    window.scrollTo(0,1730);
});

var btnAbout = document.querySelector("#scroll-about");

btnAbout.addEventListener("click", function(){
    window.scrollTo(0,800);
});