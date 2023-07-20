function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
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
// Function to fetch data from the Game of Thrones API and render the books
function fetchBooks() {
  const apiEndpoint = 'https://anapioficeandfire.com/api/books';

  // Make a fetch request to the API
  return fetch(apiEndpoint)
    .then((resp) => resp.json())
    .then((json) => {
      // Call the renderBooks() function and pass the JSON data as an argument
      renderBooks(json);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

// Function to render the books 
function renderBooks(data) {
  // Assuming the 'data' is an array of books
  data.forEach((book) => {
    console.log(book.name); 
  });
}

// Call fetchBooks() when index.html is loaded
fetchBooks();
