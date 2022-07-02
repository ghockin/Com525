/* Copyright 2022, Gabriel Hockin, All rights reserved. */

import React from "react";
import { useState } from "react";
import '../Popup/Popup.css';
import { Check } from "@material-ui/icons";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>Improve Your Web Design Skills Today!</h1>
        </div>
        <div className="body">
          <p>
            Be the first to hear when new tutoirals are realesed. Subscribe to email notifications for Free!
          </p>
        </div>
        <div className="email">
          <input className="emailInput" type="text" placeholder="Email" />
        </div>
        <div className="footer">
          <button>Subscribe</button>
        </div>
        <div className="terms">
          <p>I confirm that I have read and agree to Privacy Policy.</p>
          <button><Check /></button>
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
        Hi there, click me to sign up.
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default Popup;
