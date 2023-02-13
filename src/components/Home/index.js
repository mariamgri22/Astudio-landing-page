import React from "react";
import Header from "../Header";

import "./style.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <div className="home-content">
          <span className="bg-home">
            Ցանկացած տեսակի տեխնիկայի ներմուծում և արտահանում
          </span>
          <span className="sm-home">
            Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական
            արդյունաբերության ստանդարտ մոդելային տեքստ
          </span>
          <button>Ավելին</button>
        </div>
      </div>
    </>
  );
}
