import { useState, useEffect } from 'react';

const useFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/books.json');
        const data = await response.json();
        setBooks(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { books, loading, error };
};

export default useFetchBooks;
