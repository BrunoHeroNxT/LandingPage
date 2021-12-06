var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function(){
    window.scrollTo(0,0);
});


var sobre = document.querySelector("#scroll-about");

sobre.addEventListener("click", function(){
    window.scrollTo(20, 0);
});

var equipe = document.querySelector("#scroal-team");

equipe.addEventListener("click", function(){
    window.scrollTo(50, 0);
});

var contate = document.querySelector("#scroll-contact");

contate.addEventListener("click", function(){
    window.scrollTo(40, 0);
});

var compre = document.querySelector("#scroll-service");

compre.addEventListener("click", function(){
    window.scrollTo(30, 0);
});
