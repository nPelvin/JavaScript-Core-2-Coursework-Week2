function highlightWords(paragraph, colours) {
// store paragraph as array
let paragraphArray = paragraph.split(' ');

//create elements
pEl = document.createElement("p");
selectEl = document.createElement("select");

// position elements
contentLoc = document.getElementById("content");
contentLoc.appendChild(pEl);
contentLoc.appendChild(selectEl);

//create dropdown menu
function optionCreation(elem){
let optionEl = document.createElement("option");
selectEl.appendChild(optionEl);
optionEl.innerHTML=elem;
optionEl.value=elem;
}


//create paragraph function and event listeners
function paraCallback(elem){
let spanEl = document.createElement("span");
pEl.appendChild(spanEl);
spanEl.innerHTML=elem + " ";
spanEl.addEventListener("click", function () {
if(spanEl.style.backgroundColor===selectEl.value ||
   selectEl.value==="none"){
spanEl.style.backgroundColor="initial";
}
else {
spanEl.style.backgroundColor=selectEl.value;
}
})
}

// call functions
paragraphArray.forEach(paraCallback);
colours.forEach(optionCreation);

}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours); 
