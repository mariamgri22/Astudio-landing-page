import React from "react";

export default function Card({ icon, title, description }) {
  return (
    <div className="card">
      <div className="icon-circle">
        <img id="svg" src={icon} alt="" />
      </div>
      <h2 className="wh-title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
}
