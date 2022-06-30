import React from "react";
import { useState } from "react";
import '../Popup/Popup.css';

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="title"></div>
        <h1>Are you sure you want to continue?</h1>
        <div className="body"></div>
        <p>
          The next page is awesome!
        </p>
        <div className="footer">
          <button onClick={() => closeModal(false)} id="cancelBtn" >Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

function Popup() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <button className="openModalBtn" onClick={() => {
        setOpenModal(true);
      }}
      >
        Open
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default Popup;
