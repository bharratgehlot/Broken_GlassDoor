function LogInComponent() {
  return (
    <>
      <div
        style={{

          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          alignItems: "center",
          justifyContent: "center",
        }}

      >
        <label style={{ fontWeight: "bold", fontSize: "1rem", width: "100%", maxWidth: "300px", textAlign: "left" }}>
          Username:
          <input type="text" placeholder="Enter Username" style={{
            width: "100%",
            padding: "0.5rem",
            marginTop: "0.3rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "0.5rem",
          }} />
        </label>


        <label style={{ fontWeight: "bold", fontSize: "1rem", width: "100%", maxWidth: "300px", textAlign: "left" }} >
          Password:
          <input type="text" placeholder="Enter Password" style={{
            width: "100%",
            padding: "0.5rem",
            marginTop: "0.3rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "0.5rem"
          }}
          />
        </label>


        <button type="submit" style={{
          padding: "0.6rem 1.2rem",
          borderRadius: "6px",
          backgroundColor: "black",
          color: "white",
          fontWeight: "bold",
          fontSize: "1rem",
          border: "none",
          cursor: "pointer",
          transition: "all 0.2s ease",

        }}

          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#333";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "black";
            e.target.style.transform = "scale(1)";
          }}

        >Submit</button>
      </div>
    </>
  )

}

export default LogInComponent;