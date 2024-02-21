import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Main/Modal";

import "./App.css";
import Homepage from "./Components/Main/Homepage/Homepage";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
    navigate("/");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Header openModal={openModal} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/product"
          element={<Modal isOpen={isModalOpen} onClose={closeModal} />}
        />
        <Route
          path="/customers"
          element={<Modal isOpen={isModalOpen} onClose={closeModal} />}
        />
        <Route
          path="/about"
          element={<Modal isOpen={isModalOpen} onClose={closeModal} />}
        />
        <Route
          path="/blog"
          element={<Modal isOpen={isModalOpen} onClose={closeModal} />}
        />
        <Route
          path="/login"
          element={<Modal isOpen={isModalOpen} onClose={closeModal} />}
        />
      </Routes>

      <Main openModal={openModal} />
      <Footer openModal={openModal} />

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
