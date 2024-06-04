//detecting button pressed

for(var i=0;i< document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){ //aninomazi function
        var buttonText= this.innerHTML; //button number or letter 
        makeSound(buttonText);
        animate(buttonText)
    });

}
//detecting key pressed
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animate(event.key);
});

function makeSound(key){
   
    switch (key) {
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");//location of audio
            tom1.play();             
            break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");//location of audio
            tom2.play();             
            break;
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");//location of audio
            tom3.play();             
            break;

        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");//location of audio
            tom4.play();             
            break;
        case "j":
            var snare= new Audio("sounds/snare.mp3");//location of audio
            snare.play();             
            break;
        case "k":
            var crash= new Audio("sounds/crash.mp3");//location of audio
            crash.play();             
            break;
        case "l":
            var kick= new Audio("sounds/kick-bass.mp3");//location of audio
            kick.play();             
            break;

    
    
        default:
            break;
    }

 
}


//function animate key
function animate(key){
    var btnAnimation = document.querySelector("."+ key);
    btnAnimation.classList.add("pressed")

    setTimeout(function(){
        btnAnimation.classList.remove("pressed");
    },100);
}