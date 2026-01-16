import { useState } from "react";

import ProfileCard from "./components/profile-card.jsx";
import Footer from "./components/Footer.jsx";

import  {profiles} from "./data/profile.js";

function App() {
  // let selectedProfile = null;


  const [selectedProfile, setSelectedProfile] = useState(null);

  // const state = useState(null);

  // let selectedProfile = state[0];
  // const setSelectedProfile = state[1];



  // callback function to handle passing of data from child<ProfileCard> to parent<App.jsx>
  function handleProfileSelect(profile) {
    setSelectedProfile(profile);
  }

  console.log("Selected Profile:", selectedProfile);

  return (
    <section>
      {/* Profile Card */}
      <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
        {profiles.map(({ id, name, role, image }) => (
          <ProfileCard key={id} name={name} role={role} image={image} onSelect={handleProfileSelect} />
        ))}
      </div>

      {/* Details section */}

      <div
        style={{
          flex: 1,
          padding: "12px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          maxWidth: "800px",
          margin: "2rem auto",
          border: "1px solid #e5e7eb",
          borderRadius: "0.5rem",
        }}>
        {!selectedProfile ? (
          <p style={{ color: "#6b7280" }}>Select a profile to view details.</p>
        ) : (
          <div>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#111827" }}>{selectedProfile.name}</h2>
            <p style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#6b7280" }}>{selectedProfile.role}</p>
            <img src={selectedProfile.image} alt={selectedProfile.name} style={{ width: "200px", borderRadius: "50%" }} />
          </div>
        )}
      </div>

      <Footer />
    </section>
  );
}

export default App;
