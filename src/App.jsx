import { useState } from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Main/Modal";

import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Header openModal={openModal} closeModal={closeModal} />
      <Main openModal={openModal} closeModal={closeModal} />
      <Footer openModal={openModal} closeModal={closeModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
