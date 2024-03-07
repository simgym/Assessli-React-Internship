import ContactForm from "./ContactForm";
import backgroundImg from "./assets/background.jpg";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-offwhite-pink">
      <div
        className="bg-cover bg-center h-screen w-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
