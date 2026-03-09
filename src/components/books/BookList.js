import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BookList(){

const [books,setBooks] = useState([])

function fetchBooks(){

axios.get("https://worksheet-library.mashupstack.com/books")
.then(response=>{
setBooks(response.data)
})

}

useEffect(()=>{
fetchBooks()
},[])

function deleteBook(id){

axios.delete("https://worksheet-library.mashupstack.com/books/"+id)
.then(()=>{
fetchBooks()
})

}

return(

<div className="container mt-5">

<h2 className="mb-4">Library Books</h2>

<Link to="/books/create" className="btn btn-success mb-3">
Add Book
</Link>

<table className="table table-bordered">

<thead className="table-dark">
<tr>
<th>Title</th>
<th>Author</th>
<th>Year</th>
<th>Genre</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{books.map(book=>(
<tr key={book.id}>

<td>{book.title}</td>
<td>{book.author}</td>
<td>{book.published_year}</td>
<td>{book.genre}</td>

<td>

<Link
to={"/books/edit/"+book.id}
className="btn btn-primary btn-sm me-2"
>
Edit
</Link>

<button
className="btn btn-danger btn-sm"
onClick={()=>deleteBook(book.id)}
>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

)

}

export default BookList