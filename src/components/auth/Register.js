import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Register(){

const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [error,setError] = useState('')

const navigate = useNavigate()

function registerUser(){

axios.post("https://worksheet-auth.mashupstack.com/register",{
user_name:name,
email:email,
password:password
})

.then(response=>{

alert("Registration Successful")

navigate("/login")

})

.catch(error=>{

if(error.response && error.response.data.message){
setError(error.response.data.message)
}else{
setError("Registration failed")
}

})

}

return(

<div>

<Navbar/>

<div className="container mt-4">

<h2>Register</h2>

{error && <div className="alert alert-danger">{error}</div>}

<div className="form-group">
<label>Name</label>
<input
type="text"
className="form-control"
value={name}
onChange={(e)=>setName(e.target.value)}
/>
</div>

<div className="form-group">
<label>Email</label>
<input
type="text"
className="form-control"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
</div>

<div className="form-group">
<label>Password</label>
<input
type="password"
className="form-control"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>
</div>

<br/>

<button
className="btn btn-primary"
onClick={registerUser}
>
Register
</button>

</div>

</div>

)

}

export default Register;