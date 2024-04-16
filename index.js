function fetchBooks() {
  // Fetch data from the  API
  fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      // Convert the response to JSON
      return response.json();
    })
    .then(data => {
      // Call the renderBooks function and pass the JSON data
      renderBooks(data);
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('Error fetching books:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
// // Call renderBooks() with the booksData JSON object
const booksData = [
  { name: "A Game of Thrones", author: "George R. R. Martin" },
  { name: "A Clash of Kings", author: "George R. R. Martin" },
  { name: "A Storm of Swords", author: "George R. R. Martin" },
  { name: "A Feast for Crows", author: "George R. R. Martin" },
  { name: "A Dance with Dragons", author: "George R. R. Martin" },
  { name: "The Princess and the Queen"},
  { name: "The Rogue Princ"}
];
renderBooks(data);
