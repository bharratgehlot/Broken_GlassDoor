import LogInComponent from "../components/LogIn_Component";

function Log_In() {
  return (
    <div style={{ 
      
      padding: "2rem", 
      textAlign: "center",
      maxWidth: "700px",
      margin: "auto",
      border: "1px solid #ccc",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>

      <h1 style={{ marginBottom: "1rem" }}>🔐 Broken_GlassDoor</h1>

      <p><strong> Welcome to the Mandsaur University Students Hiring Platform </strong> </p>
      <div style={{margin: "2rem 0"}}> 
      <LogInComponent />
      </div>

      <p style={{ fontSize: "0.9rem", color: "#888"}}>🤫 Use <strong>Username:</strong> "Admin" and <strong>Password:</strong> "123"<br />
        (but don’t tell anyone... seriously)</p>
    </div>

  );
}

export default Log_In;
