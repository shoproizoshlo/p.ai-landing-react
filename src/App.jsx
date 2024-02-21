import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Main/Modal";

import "./App.css";
import Homepage from "./Components/Main/Homepage/Homepage";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };
  return (
    <>
      <Header openModal={openModal} />
      <Routes>
        <Route path="/" element={<Homepage openModal={openModal} />} />
      </Routes>

      <Footer openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
