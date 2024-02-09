// script.js

// Function to fetch books from the server
async function fetchBooks() {
    try {
        const response = await fetch('./api/books'); // Fetch books from the server
        const data = await response.json(); // Extract JSON data from the response
        return data; // Return the array of books
    } catch (error) {
        console.error('Error fetching books:', error);
        return []; // Return an empty array in case of error
    }
}

// Function to add a book
async function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    if (title && author) {
        try {
            // Send a POST request to the server to add the book
            const response = await fetch('./api/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author })
            });
            if (response.ok) {
                // Book added successfully, fetch updated book list and display
                const books = await fetchBooks();
                displayBooks(books);
                document.getElementById('bookForm').reset();
            } else {
                console.error('Failed to add book:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding book:', error);
        }
    } else {
        alert('Please enter both title and author.');
    }
}

// Function to display books in table
function displayBooks(books) {
    const table = document.getElementById('bookTable');
    table.innerHTML = `
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    `;

    books.forEach((book, index) => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button onclick="editBook(${index})">Edit</button>
                <button class="button-delete" onclick="deleteBook(${index})">Delete</button>
            </td>
        `;
    });
}

// Function to edit a book
async function editBook(index) {
    const book = books[index];
    const newTitle = prompt('Enter new title:', book.title);
    const newAuthor = prompt('Enter new author:', book.author);

    if (newTitle && newAuthor) {
        try {
            // Send a PUT request to the server to update the book
            const response = await fetch(`./api/books/${book.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: newTitle, author: newAuthor })
            });
            if (response.ok) {
                // Book updated successfully, fetch updated book list and display
                const books = await fetchBooks();
                displayBooks(books);
            } else {
                console.error('Failed to update book:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating book:', error);
        }
    } else {
        alert('Invalid input. Both title and author are required.');
    }
}

// Function to delete a book
async function deleteBook(index) {
    const book = books[index];
    if (confirm('Are you sure you want to delete this book?')) {
        try {
            // Send a DELETE request to the server to delete the book
            const response = await fetch(`./api/books/${book.id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                // Book deleted successfully, fetch updated book list and display
                const books = await fetchBooks();
                displayBooks(books);
            } else {
                console.error('Failed to delete book:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    }
}

// Fetch books when the page loads and display them in the table
window.onload = async () => {
    const books = await fetchBooks();
    displayBooks(books);
};

// Event listener for form submission
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addBook();
});
