let books = document.querySelectorAll('#book-list li .name'); //Selects multiple elements
//console.log(books);

books.forEach(function(book){
  book.textContent += ' (book title)';
});

const bookList = document.querySelector('#book-list');
//bookList.innerHTML = '<h2>Books and books</h2>';
//bookList.innerHTML += '<p>This is how you add HTML</p>'