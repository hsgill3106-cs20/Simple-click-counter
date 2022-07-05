//click counter by Mr. V

//GLOBAL VARIABLE
let count = 0;

document.addEventListener("click", clickCount);

//EVENT FUNCTION
function clickCount() {
count++;
document.getElementById("count-display").innerHTML = count;
}