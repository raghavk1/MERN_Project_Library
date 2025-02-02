import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Dashboard.css"; // Import CSS file


const Dashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('/api/books', {
        headers: { token: `${localStorage.getItem('token')}` },
      });
      setBooks(res.data);
    };

    fetchBooks();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Library Dashboard</h2>
      <div className="card-container">
        {books.map((book) => (
          <div className="card" key={book._id}>
            <h3 className="card-title">{book.title}</h3>
            <p className="card-author">by {book.author}</p>
            <p className="card-year">Published: {book.publicationYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
