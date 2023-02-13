import React from "react";

export default function Photo({ photo, descrition, handleModalOpen }) {
   return (
    <>
      <div className="photo">
        <img onClick={handleModalOpen} src={photo} alt="Photo 1" />
        <p className="photo-title">{descrition}</p>
      </div>
    </>
  );
}
