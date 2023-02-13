import React from "react";
import SingleNews from "./SingleNews";
import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";
import news4 from "../../assets/news4.png";
import "./style.css";

export default function News() {
  return (
    <div className="news-container">
      <h1 className="title">Նորություններ</h1>
      <div className="news">
      <SingleNews
        image={news4}
        title={"Ինչպես մաքսազերծել ավելի մատչելի"}
        day={"20.12.2022"}
        description={
          "Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության"
        }
      />
      <SingleNews
        image={news1}
        title={"Ինչպես մաքսազերծել ավելի մատչելի"}
        day={"20.12.2022"}
        description={
          "Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության"
        }
      />
      <SingleNews
        image={news2}
        title={"Ինչպես մաքսազերծել ավելի մատչելի"}
        day={"20.12.2022"}
        description={
          "Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության"
        }
      />
      <SingleNews
        image={news3}
        title={"Ինչպես մաքսազերծել ավելի մատչելի"}
        day={"20.12.2022"}
        description={
          "Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության"
        }
      />
      </div>
    </div>
  );
}
