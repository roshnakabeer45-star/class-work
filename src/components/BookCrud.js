import React, { useState } from "react";

function BookCrud() {

  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  // Add Book
  const addBook = () => {
    if (bookName.trim() === "") {
      alert("Book name cannot be empty");
      return;
    }

    const newBook = {
      id: books.length + 1,
      name: bookName,
      author: authorName,
      date: publishDate
    };

    setBooks([...books, newBook]);

    setBookName("");
    setAuthorName("");
    setPublishDate("");
  };

  // Delete Book
  const deleteBook = (id) => {
    const updated = books.filter((book) => book.id !== id);
    setBooks(updated);
  };

  // Edit Book
  const startEdit = (book) => {
    setEditId(book.id);
    setEditName(book.name);
  };

  // Save Edit
  const saveEdit = (id) => {
    if (editName.trim() === "") {
      alert("Book name cannot be empty");
      return;
    }

    const updated = books.map((book) =>
      book.id === id ? { ...book, name: editName } : book
    );

    setBooks(updated);
    setEditId(null);
  };

  // Cancel Edit
  const cancelEdit = () => {
    setEditId(null);
  };

  // Search Filter
  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">Book List Management</h2>

      {/* Add Book Form */}

      <div className="card p-3 mb-4">
        <h4>Add New Book</h4>

        <input
          className="form-control mb-2"
          placeholder="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Author Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />

        <input
          type="date"
          className="form-control mb-2"
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
        />

        <button className="btn btn-primary" onClick={addBook}>
          Add Book
        </button>
      </div>

      {/* Search */}

      <input
        className="form-control mb-3"
        placeholder="Search by book or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}

      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Publish Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {filteredBooks.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No books found
              </td>
            </tr>
          ) : (

            filteredBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>

                <td>
                  {editId === book.id ? (
                    <input
                      className="form-control"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  ) : (
                    book.name
                  )}
                </td>

                <td>{book.author}</td>
                <td>{book.date}</td>

                <td>

                  {editId === book.id ? (
                    <>
                      <button
                        className="btn btn-success btn-sm mr-2"
                        onClick={() => saveEdit(book.id)}
                      >
                        Save
                      </button>

                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={cancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-warning btn-sm mr-2"
                        onClick={() => startEdit(book)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteBook(book.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}

                </td>

              </tr>
            ))

          )}

        </tbody>
      </table>

    </div>
  );
}

export default BookCrud;


