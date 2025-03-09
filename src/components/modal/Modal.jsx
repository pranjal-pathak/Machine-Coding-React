import React, { useState } from 'react';

const Modal = () => {
    const [active, setActive] = useState(false);
    const handleOpenModal = () => {
      setActive(true);
    };

    const handleCloseModal = () => {
      setActive(false);
    };
  return (
    <div>
      <button className="p-2 bg-gray-200 border border-gray-500" onClick={handleOpenModal}>
        Open Modal
      </button>
      {active && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-[400px]">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={handleCloseModal}
            >
              ✖
            </button>
            <h2 className="text-lg font-semibold">Modal Title</h2>
            <p className="mt-2 text-gray-600">This is a modal content.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
