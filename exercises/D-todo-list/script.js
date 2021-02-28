function todoList(todos) {
  // Create UL in specified location
  let content = document.querySelector("#content")
  let ul = document.createElement("ul");
  content.appendChild(ul);

  // Create list elements
  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.innerText = todo.todo;
    ul.appendChild(li);

    // Add event listener to add the line-through style to the todo.
    li.addEventListener("click", strike);
    function strike(){
      if(li.style.textDecorationLine === "line-through"){
        li.style.textDecorationLine = "initial";
      } else {
      li.style.textDecorationLine = "line-through";
    }
  }

  })

}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);