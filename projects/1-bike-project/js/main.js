let blueBtnEl = document.getElementById("blueBtn");
blueBtnEl.addEventListener("click",function() {

    let jumbotronEl=document.getElementsByClassName("jumbotron")[0];
    jumbotronEl.style.backgroundColor="#588fbd";

    let donateBikeEl=document.getElementsByClassName("btn btn-primary btn-lrg")[0];
    donateBikeEl.style.backgroundColor="#ffa500";

    let volunteerEl=document.getElementsByClassName("btn btn-secondary btn-lrg")[0];
    volunteerEl.style.backgroundColor="black";
    volunteerEl.style.color="white";
}
)

let orangeBtnEl = document.getElementById("orangeBtn");
orangeBtnEl.addEventListener("click",function() {

    let jumbotronEl=document.getElementsByClassName("jumbotron")[0];
    jumbotronEl.style.backgroundColor="#f0ad4e";

    let donateBikeEl=document.getElementsByClassName("btn btn-primary btn-lrg")[0];
    donateBikeEl.style.backgroundColor="#5751fd";

    let volunteerEl=document.getElementsByClassName("btn btn-secondary btn-lrg")[0];
    volunteerEl.style.backgroundColor="#31b0d5";
    volunteerEl.style.color="white";
}
)

let greenBtnEl = document.getElementById("greenBtn");
greenBtnEl.addEventListener("click",function() {

    let jumbotronEl=document.getElementsByClassName("jumbotron")[0];
    jumbotronEl.style.backgroundColor="#87ca8a";

    let donateBikeEl=document.getElementsByClassName("btn btn-primary btn-lrg")[0];
    donateBikeEl.style.backgroundColor="black";

    let volunteerEl=document.getElementsByClassName("btn btn-secondary btn-lrg")[0];
    volunteerEl.style.backgroundColor="#8c9c08";
}
)


let emailField = document.getElementById("exampleInputEmail1");
let nameField = document.getElementById("example-text-input");
let describeField = document.getElementById("exampleTextarea");




function updateValue(){
if (emailField.value.length === 0) {
    emailField.style.backgroundColor="red";
}
if (!(emailField.value.includes("@"))) {
    emailField.style.backgroundColor="red";
}
else {
    emailField.style.backgroundColor="white";
    }

if (nameField.value.length === 0) {
    nameField.style.backgroundColor="red";
}
else {
    nameField.style.backgroundColor="white";
    }

if (describeField.value.length === 0) {
    describeField.style.backgroundColor="red";
}
else {
    describeField.style.backgroundColor="white";
    }

       if(describeField.style.backgroundColor==="red" || nameField.style.backgroundColor==="red" || emailField.style.backgroundColor==="red")
   {
      alert("Oops! Somethings missing.");
      event.preventDefault();
      return false;
   }
   alert("Thanks for filling out the form!");
   return true;

}

let formEl=document.getElementsByTagName("form")[0];
console.log(formEl);
formEl.onsubmit = "updateValue()"
formEl.addEventListener('submit', updateValue);
