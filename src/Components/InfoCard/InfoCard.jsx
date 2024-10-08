import React, { useState } from "react";
import "./InfoCard.css";
import { FaPencilAlt } from "react-icons/fa";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";
const InfoCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your info</h4>
        <div>
          <FaPencilAlt
            style={{ width: "0.8rem", height: "1rem" }}
            onClick={() => setModalOpen(true)}
          />
          <ProfileModal open={modalOpen} close={setModalOpen}/>
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Peshawar</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Tech Track technology</span>
      </div>
      <button className="button logouButton">Logout</button>
    </div>
  );
};

export default InfoCard;
