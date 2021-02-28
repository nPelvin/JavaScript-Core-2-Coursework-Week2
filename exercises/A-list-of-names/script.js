function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
var contentEl = document.getElementById("content");
for ( let i = 0 ; i < people.length ; i++ ){
contentEl.innerHTML+= "<h1>" + people[i].name + "</h1><h2>" + people[i].job + "</h2>";
};

