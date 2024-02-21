import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
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
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };
  return (
    <>
      <Header openModal={openModal} />
      <Routes>
        <Route path="/product" element={<Modal />} />
        <Route path="/customers" element={<Modal />} />
        <Route path="/about" element={<Modal />} />
        <Route path="/blog" element={<Modal />} />
        <Route path="/login" element={<Modal />} />
        <Route path="/success-stories" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Homepage />} />
      </Routes>

      <Main openModal={openModal} />

      <Footer openModal={openModal} />

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
