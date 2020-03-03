const wmf = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf);

var books = document.querySelector('#book-list li .name'); //querySelector only selects one element
//console.log(books);

books = document.querySelectorAll('#book-list li .name'); //Selects multiple elements
//console.log(books);

Array.from(books).forEach(function(book){
  console.log(book);
});
