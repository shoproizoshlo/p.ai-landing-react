import Homepage from "./Homepage/Homepage";

const Main = ({ openModal }) => {
  return (
    <main>
      <Homepage openModal={openModal} />
    </main>
  );
};

export default Main;
