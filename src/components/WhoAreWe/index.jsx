import React from "react";
import Card from "./Card";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import icon5 from "../../assets/icon5.svg";
import icon6 from "../../assets/icon6.svg";
import "./style.css";

export default function WhoAreWe() {
  return (
    <div className="card-container">
      <h1 className="title">Ով ենք մենք</h1>
      <div className="cards">
        <div className="row">
          <Card
            icon={icon1}
            title={"Փորձառու թիմ"}
            description={
              "Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության ստանդարտ "
            }
          />
          <Card
            icon={icon2}
            title={"փողհատուցում"}
            description={
              "Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության ստանդարտ "
            }
          />
          <Card
            icon={icon3}
            title={"ապահով ներմուծում"}
            description={
              "Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության ստանդարտ "
            }
          />
        </div>
        <div className="row">
          <Card
            icon={icon4}
            title={"Արագ սպասարկում"}
            description={
              "Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության ստանդարտ "
            }
          />
          <Card
            icon={icon5}
            title={"հարուստ փորձ"}
            description={
              "Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության ստանդարտ "
            }
          />
          <Card
            icon={icon6}
            title={"Մատչելի գներ"}
            description={
              "Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության ստանդարտ "
            }
          />
        </div>
      </div>
    </div>
  );
}
