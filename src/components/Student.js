import { useParams } from "react-router-dom";

function Student() {

  const { name } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome, {name}!</h1>
    </div>
  );
}

export default Student;