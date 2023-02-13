import React, { useState } from "react";
import form from "../../assets/form.png";
import logoName from "../../assets/logoName.svg";
import group from "../../assets/Group.svg";
import "./style.css";

export default function Hetadardz() {
  const [submit, setSubmit] = useState(false);
  const handleSubmit = () => {
    setSubmit(true);
  };
  return (
    <div className="hetadardz-container">
      <div className="image-container">
        <img id="formImg" src={form} alt="" />
      </div>

      <form>
        <h2 className="form-title">Հետադարձ կապ</h2>
        {!submit ? (
          <>
            <input type="text" placeholder="Ընկերության անվանում" />
            <input type="text" placeholder="Հեռախոս" />
            <input type="email" placeholder="Էլ․ փոստ" />

            <label htmlFor="checkbox">
              <input type="checkbox" />
              Սեղմելով Կոճակին Դուք Համաձայնվում Եք Ընդունել Օգտագործման
              Կանոնները
            </label>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </>
        ) : (
          <>
            <img id="logoN" src={logoName} alt="" />
            <img src={group} alt="" />
            <p>Շնորհակալության մենք կկապնվենք ձեզ հետ</p>
          </>
        )}
        {/*  */}
      </form>
    </div>
  );
}
