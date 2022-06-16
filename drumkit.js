const tom1 = document.getElementsByClassName("tom1");
const tom2 = document.getElementsByClassName("tom2");
const tom3 = document.getElementsByClassName("tom3");
const tom4 = document.getElementsByClassName("tom4");
const snare = document.getElementsByClassName("snare");
const crash = document.getElementsByClassName("crash");
const kick = document.getElementsByClassName("kick");


tom1[0].addEventListener("click", function(){
    const audio = new Audio("./sounds/tom-1.mp3");
    
    audio.play();
});
tom2[0].addEventListener("click", function(){
    const audio = new Audio("./sounds/tom-2.mp3");
    
    audio.play();
});
tom3[0].addEventListener("click", function(){
    const audio = new Audio("./sounds/tom-3.mp3");
    
    audio.play();
});
tom4[0].addEventListener("click", function(){
    const audio = new Audio("./sounds/tom-4.mp3");
    
    audio.play();
});
snare[0].addEventListener("click", function(){
    const audio = new Audio("./sounds/snare.mp3");
    
    audio.play();
});
kick[0].addEventListener("click", function(){
    const audio = new Audio("./sounds/kick-bass.mp3");
    
    audio.play();
});
crash[0].addEventListener("click", function(){
    const audio = new Audio("./sounds/crash.mp3");
    
    audio.play();
});



document.body.addEventListener('keypress', function (event) {
    if(event.key == "w"){
        const audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
    }
});

document.body.addEventListener('keypress', function (event) {
    if(event.key == "a"){
        const audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
    }
});

document.body.addEventListener('keypress', function (event) {
    if(event.key == "s"){
        const audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
    }
    else if(event.key == "j"){
        const audio = new Audio("./sounds/snare.mp3");
        audio.play();
    }
    else if(event.key == "d"){
        const audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
    }
    else if(event.key == "k"){
        const audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
    }
    else if(event.key == "l"){
        const audio = new Audio("./sounds/crash.mp3");
        audio.play();
    }
});



