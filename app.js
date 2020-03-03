/*
let books = document.querySelectorAll('#book-list li .name'); //Selects multiple elements
//console.log(books);

books.forEach(function(book){
  book.textContent += ' (book title)';
});

const bookList = document.querySelector('#book-list');
//bookList.innerHTML = '<h2>Books and books</h2>';
//bookList.innerHTML += '<p>This is how you add HTML</p>'

const banner = document.querySelector('#page-banner');

console.log(banner.nodeType);
console.log(banner.nodeName);
console.log(banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);


const bookList = document.querySelector('#book-list');


console.log(bookList.parentNode);
console.log(bookList.parentElement.parentElement);

console.log(bookList.childNodes); // Includes line breaks, is NodeList
console.log(bookList.children); // Doesn't include line breaks, is HTMLCollection


console.log(bookList.nextSibling); // Is a line break
console.log(bookList.nextElementSibling);
console.log(bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for school.'


const btns = document.querySelectorAll('#book-list .delete');

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  });
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click', e => {
  e.preventDefault();
  console.log('Navigation to', e.target.textContent, 'was prevented')
});
*/


// Delete Book
const list = document.querySelector('#book-list ul');

list.addEventListener('click', e => {
   if(e.target.className === 'delete') {
     const li = e.target.parentElement;
     list.removeChild(li);
   }
 });

// Add Book
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', e => {
  e.preventDefault(); // Prevents page reloading
  const value = addForm.querySelector('input[type="text"]').value;
  
  // Create element
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // Add content
  deleteBtn.textContent = 'delete';
  bookName.textContent = value;

  // Add classes
bookName.classList.add('name');
deleteBtn.classList.add('delete');

  // Append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

// Hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', e => {
  if (hideBox.checked) {
    list.style.display='none';
  } else {
    list.style.display='initial';
  }
});

// Filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', e => {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(book => {
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});

// Tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', e => {
  if(e.target.tagName === 'LI') { // 'LI' has to be upper case to work - tagName returns an uppercase value for some reason
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach(panel => {
      if (panel === targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    })
  }
})