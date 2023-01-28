function clap(){
    const audio = new Audio('/Sounds/clap.mp3');
    audio.play();
    }
function hihat(){
    const audio = new Audio('/Sounds/hihat.mp3');
    audio.play();
    }
function kick(){
    const audio = new Audio('/Sounds/kick.mp3');
    audio.play();
    }
function open_hihat(){
    const audio = new Audio('/Sounds/open hihat.mp3');
    audio.play();
    }
function boom(){
    const audio = new Audio('/Sounds/boom.mp3');
    audio.play();
    }

    document.addEventListener("keypress", function onPress(event) {
        if (event.key == "a" || event.key == "A") {
            clap();
        }
        if (event.key == "s" || event.key == "S") {
            hihat();
        }
        if (event.key == "d" || event.key == "D") {
            kick();
        }
        if (event.key == "f" || event.key == "F") {
            open_hihat();
        }
        if (event.key == "g" || event.key == "G") {
            boom();
        }
    });