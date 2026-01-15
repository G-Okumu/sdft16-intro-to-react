
import ProfileCard from "./components/profile-card.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <section>

      {/* Profile Card */}
      <ProfileCard name="John Doe" role="Software Engineer" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhYL5T4L9EqKe2a3CK1jjRo29y23-0cwEkA&s"/>

      <ProfileCard name="Jane Smith" role="Product Manager" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNQf06bWUIvj1FfSktrxa0nVkQ56XeFzorQ&s"/>
      

      <Footer />
    </section>
  );
}

export default App;
