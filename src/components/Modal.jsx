import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-96 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Chatbot</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ✖️
          </button>
        </div>
        <textarea
          rows="4"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message here..."
        ></textarea>
        <button
          onClick={onClose}
          className="w-full bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Modal;
