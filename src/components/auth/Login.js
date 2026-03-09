import axios from "axios";
import { useState } from "react";
import Navbar from "../Navbar";

function Login(){

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [error,setError] = useState('')

function loginUser(){

axios.post("https://worksheet-auth.mashupstack.com/login",{
email:email,
password:password
})

.then(response=>{

console.log(response.data.token)

alert("Successfully Logged In")

})

.catch(error=>{

if(error.response && error.response.data.message){
setError(error.response.data.message)
}else{
setError("Login Failed")
}

})

}

return(

<div>

<Navbar/>

<div className="container mt-4">

<h2>Login</h2>

{error && <div className="alert alert-danger">{error}</div>}

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
onClick={loginUser}
>
Login
</button>

</div>

</div>

)

}

export default Login;