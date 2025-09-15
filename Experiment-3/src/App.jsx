import React, { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({ title: '', author: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [editingBookId, setEditingBookId] = useState(null);

  // Load the books from mock API on component mount
  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error('Failed to fetch books:', err));
  }, []);

  // Handle form input changes for controlled components
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit for adding or updating book
  const handleSubmit = e => {
    e.preventDefault();
    if (editingBookId) {
      // Update existing book
      fetch(`http://localhost:3001/books/${editingBookId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then(res => res.json())
        .then(updatedBook => {
          setBooks(books.map(book => (book.id === editingBookId ? updatedBook : book)));
          setEditingBookId(null);
          setFormData({ title: '', author: '' });
        })
        .catch(err => console.error('Update failed:', err));
    } else {
      // Add new book
      fetch('http://localhost:3001/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then(res => res.json())
        .then(newBook => {
          setBooks([...books, newBook]);
          setFormData({ title: '', author: '' });
        })
        .catch(err => console.error('Add failed:', err));
    }
  };

  // Prepare form to edit selected book
  const handleEdit = book => {
    setEditingBookId(book.id);
    setFormData({ title: book.title, author: book.author });
  };

  // Delete a book by id
  const handleDelete = id => {
    fetch(`http://localhost:3001/books/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBooks(books.filter(book => book.id !== id));
      })
      .catch(err => console.error('Delete failed:', err));
  };

  // Filter books by search term (case-insensitive)
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Library Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '8px', padding: '6px' }}
        />
        <input
          name="author"
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '8px', padding: '6px' }}
        />
        <button type="submit" style={{ width: '100%', padding: '10px' }}>
          {editingBookId ? 'Update' : 'Add'} Book
        </button>
      </form>
      
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ marginTop: '20px', width: '100%', padding: '6px' }}
      />
      
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {filteredBooks.map(book => (
          <li
            key={book.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px',
              borderBottom: '1px solid #ccc',
            }}
          >
            <span>
              <strong>{book.title}</strong> by {book.author}
            </span>
            <span>
              <button onClick={() => handleEdit(book)} style={{ marginRight: '8px' }}>
                Edit
              </button>
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </span>
          </li>
        ))}
        {filteredBooks.length === 0 && <li>No books found.</li>}
      </ul>
    </div>
  );
}

export default App;
