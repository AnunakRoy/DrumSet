//We first make the event listeners for the mouse press and keyboard press seperately, 
//and only then we pass both of the event listeners to a function that make sound with the key

//DETECTING MOUSE CLICKS
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//DETECTING KEYBOARD PRESSES
document.addEventListener("keydown" , function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

//MAKING THE SOUNDS 
function makeSound(key)
{
    switch(key) {
        case "w" :
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a" :
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s" :
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d" :
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j" :
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "k" :
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l" :
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        default :
            console.log(key);
    }
}
function buttonAnimation(key)
{   
    var activeBtn=document.querySelector("."+key);
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    } , 100);
}
