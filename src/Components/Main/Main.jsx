import Homepage from "./Homepage/Homepage";

const Main = ({ openModal, closeModal }) => {
  return (
    <main>
      <Homepage openModal={openModal} closeModal={closeModal} />
    </main>
  );
};

export default Main;
