import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBook(){

const [title,setTitle] = useState("")
const [author,setAuthor] = useState("")
const [year,setYear] = useState("")
const [genre,setGenre] = useState("")

const navigate = useNavigate()

function addBook(){

axios.post(
"https://worksheet-library.mashupstack.com/books",
{
title:title,
author:author,
published_year:year,
genre:genre
})
.then(()=>{
navigate("/")
})

}

return(

<div className="container mt-5">

<h2>Add Book</h2>

<div className="card p-4">

<div className="mb-3">
<label>Title</label>
<input
className="form-control"
onChange={(e)=>setTitle(e.target.value)}
/>
</div>

<div className="mb-3">
<label>Author</label>
<input
className="form-control"
onChange={(e)=>setAuthor(e.target.value)}
/>
</div>

<div className="mb-3">
<label>Published Year</label>
<input
type="number"
className="form-control"
onChange={(e)=>setYear(e.target.value)}
/>
</div>

<div className="mb-3">
<label>Genre</label>
<input
className="form-control"
onChange={(e)=>setGenre(e.target.value)}
/>
</div>

<button
className="btn btn-success"
onClick={addBook}
>
Submit
</button>

</div>

</div>

)

}

export default CreateBook