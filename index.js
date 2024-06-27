function addingEventListener() {
const input = document.getElementById("button");

function clickAlert() {
    alert("I've been clicked!");
}

input.addEventListener("click", clickAlert);
//addEventListener("click", clickAlert);
}