import React, { useState } from "react";
import Modal from "./Modal";

const Chatbot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
        onClick={toggleModal}
      >
        💬
      </button>
      {isModalOpen && <Modal onClose={toggleModal} />}
    </>
  );
};

export default Chatbot;
