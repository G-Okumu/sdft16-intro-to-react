export default function ProfileCard({name, role, image}) {
    // const {name, role, image } = props;
    return (
        <div style={{
        border: "1px solid #d1d5db",
        borderRadius: "0.5rem",
        width: "18rem",
        padding: "1rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        margin: "2rem auto",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}>

        <img src={image} alt="product name" style={{ width: "200px", borderRadius:"50%"}}/>

        <h2 style={{ fontSize: "1.5rem", margin: "1rem 0 0.5rem 0", color: "#111827" }}>{name}</h2>
        <p style={{ fontSize: "1rem", color: "#6b7280", margin: "0 0 1rem 0" }}>{role}</p>

      </div>
    )
}