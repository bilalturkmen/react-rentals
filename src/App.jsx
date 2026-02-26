// Importing React hooks
import { useRef, useState } from "react";
// Importing components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PropertyList from "./components/PropertyList";
import ContactModal from "./components/ContactModal";
// Importing properties data and styles
import properties from "./data/properties";
import "./App.css";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const propertyListRef = useRef(null);

  // Function to scroll to the property list section
  const scrollToProperties = () => {
    propertyListRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Header />
      <Hero
        onBrowseClick={scrollToProperties}
        onContactClick={() => setIsModalOpen(true)}
      />
      <main className="container" ref={propertyListRef}>
        <PropertyList properties={properties} />
      </main>
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
