function listOfColours(colours) {
// create select and p elements
var select = document.createElement("select");
document.getElementById("content").appendChild(select);
var p = document.createElement("p");
document.getElementById("content").appendChild(p);

// create callback function
function coloured(x){
console.log(x);
let option = document.createElement("option");
option.value=x;
document.querySelector("select").appendChild(option);
option.innerText=x;
select.addEventListener("change",function (y) {
p.textContent = `You have selected ${y.target.value}`;
p.style.color=y.target.value;
})
}

colours.forEach(coloured);

}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
