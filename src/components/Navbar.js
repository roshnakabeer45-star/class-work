import { NavLink } from "react-router-dom";

function Navbar(){
return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container">

<NavLink className="navbar-brand" to="/">Auth App</NavLink>

<ul className="navbar-nav">

<li className="nav-item">
<NavLink className="nav-link" to="/register">
Register
</NavLink>
</li>

<li className="nav-item">
<NavLink className="nav-link" to="/login">
Login
</NavLink>
</li>

</ul>

</div>
</nav>
)
}

export default Navbar;