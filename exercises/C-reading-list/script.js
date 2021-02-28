function readingList(books) {
  // Write your code here...
  document.getElementById("content").style.display="flex";

  for ( let i=0; i<books.length ;i++ ){
    let bookP=document.createElement("p");

    document.getElementById("content").appendChild(bookP);

    bookP.innerHTML="<ul><li>" + books[i].title + " by " + books[i].author + "</li>" + "<img height=\"400px\" src=\"" + books[i].img + "\">";

    if (books[i].alreadyRead===true){
      bookP.style.backgroundColor="red";
    }
    else {bookP.style.backgroundColor="green";}
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4650/9780465050659.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    img: "https://images-eu.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX218_BO1,204,203,200_QL40_ML2_.jpg"
  }
];

readingList(books);