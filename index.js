// alert("linked!");
// no parenthesis since it is not a function call it is just passing function as a parameter 
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I got clicked!");
// }

// do the one above or use anonymous funtion
// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked!");
// })


// Detecting mouse clicks 
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    const element = document.querySelectorAll(".drum")[index];
    element.addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    })
}

// Detecting button clicks
document.addEventListener("keypress", function (event) {
    console.log(event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}