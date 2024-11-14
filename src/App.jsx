import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero_Section from "./components/Hero_Section/Hero_Section";
import Client_Promisses from "./components/Client_Promises/Client_Promisses";
import Services from "./components/Services/Services";
import Our_Work from "./components/Our Work/Our_Work";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [showContact, setShowContact] = useState(false);
  const [formDisplay, setFormDisplay] = useState("block");

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  const handleForm = () => {
    if (formDisplay == "block") {
      setFormDisplay("none");
      // toggleContact();
    } else {
      setFormDisplay("block");
    }
  };

  return (
    <>
      <Navbar
        showContact={showContact}
        toggleContact={toggleContact}
        handleForm={handleForm}
        formDisplay={formDisplay}
      />

      <Hero_Section />

      <Client_Promisses />
      <Services />
      <Our_Work />
      <Review />
      <Footer />
    </>
  );
}

export default App;
