import axios from "axios";
import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

function EditBook(){

const {id} = useParams()

const [title,setTitle] = useState("")
const [author,setAuthor] = useState("")
const [year,setYear] = useState("")
const [genre,setGenre] = useState("")

const navigate = useNavigate()

useEffect(()=>{

axios.get(
"https://worksheet-library.mashupstack.com/books/"+id
)
.then(response=>{
setTitle(response.data.title)
setAuthor(response.data.author)
setYear(response.data.published_year)
setGenre(response.data.genre)
})

},[id])

function updateBook(){

axios.put(
"https://worksheet-library.mashupstack.com/books/"+id,
{
title:title,
author:author,
published_year:year,
genre:genre
}
)
.then(()=>{
navigate("/")
})

}

return(

<div className="container mt-5">

<h2>Edit Book</h2>

<div className="card p-4">

<input
className="form-control mb-3"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<input
className="form-control mb-3"
value={author}
onChange={(e)=>setAuthor(e.target.value)}
/>

<input
className="form-control mb-3"
value={year}
onChange={(e)=>setYear(e.target.value)}
/>

<input
className="form-control mb-3"
value={genre}
onChange={(e)=>setGenre(e.target.value)}
/>

<button
className="btn btn-primary"
onClick={updateBook}
>
Update
</button>

</div>

</div>

)

}

export default EditBook