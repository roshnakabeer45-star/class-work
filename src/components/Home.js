import { NavLink, useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const students = ["Alexa", "Riya", "John", "David"];

  function goToDefaultStudent() {
    navigate("/student/Riya");   // Programmatic navigation
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student List</h1>

      <ul>
        {students.map((name, index) => (
          <li key={index}>
            <NavLink to={`/student/${name}`}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>

      <button onClick={goToDefaultStudent}>
        Go To Default Student (Riya)
      </button>
    </div>
  );
}

export default Home;