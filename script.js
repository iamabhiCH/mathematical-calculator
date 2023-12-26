const themeToggle = document.getElementById("themeToggle");
const storedTheme = localStorage.getItem("theme");

if (storedTheme == "dark") {
    document.documentElement.style.setProperty("--bg-color", "#040d12");
    document.documentElement.style.setProperty("--text-color", "#93b1a6");
    document.documentElement.style.setProperty("--keypad-bg-color1", "#040d12");
    document.documentElement.style.setProperty("--keypad-bg-color2", "#183d3d");
    themeToggle.checked = true;
} else {
    document.documentElement.style.setProperty("--bg-color", "#f1eaff");
    document.documentElement.style.setProperty("--text-color", "#d67bff");
    document.documentElement.style.setProperty("--keypad-bg-color1", "#f1eaff");
    document.documentElement.style.setProperty("--keypad-bg-color2", "#d0a2f7");
}

themeToggle.addEventListener("change", function () {
    if (this.checked) {
        document.documentElement.style.setProperty("--bg-color", "#040d12");
        document.documentElement.style.setProperty("--text-color", "#93b1a6");
        document.documentElement.style.setProperty(
            "--keypad-bg-color1",
            "#040d12"
        );
        document.documentElement.style.setProperty(
            "--keypad-bg-color2",
            "#183d3d"
        );
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.style.setProperty("--bg-color", "#f1eaff");
        document.documentElement.style.setProperty("--text-color", "#d67bff");
        document.documentElement.style.setProperty(
            "--keypad-bg-color1",
            "#f1eaff"
        );
        document.documentElement.style.setProperty(
            "--keypad-bg-color2",
            "#d0a2f7"
        );
        localStorage.setItem("theme", "light");
    }
});

let result = document.getElementById('res');
function appendToresult(value){
    result.value += value;
    playButtonSound();
}

function removeOneChar(){
    if(result.value == 'Error'){
        result.value = '';
    }
    result.value = result.value.slice(0,-1);
    playButtonSound();
}

function clearResult(){
    result.value = '';
    playButtonSound();
}

function calculate(){
    playButtonSound();
    try{
        if(result.value == ''){
            result.value = '0';
        }
        else{
            result.value = eval(result.value);
        }
    }
    catch(e){
        result.value = 'Error';
    }
}
function playButtonSound(){
    const btnSound = document.getElementById('btnSound');
    btnSound.currentTime = 0;
    btnSound.play();
}