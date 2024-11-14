import React from "react";
import "./Work.css";
import WORK1 from "/WORK1.png";
import WORK2 from "/WORK2.png";
import WORK3 from "/WORK3.png";
import Main_Buton from "../Main Button/Main_Buton";

const work_data = [
  {
    id: 1,
    img: WORK1,
    heading: "Hexium",
    description:
      "Power up your game with top-tier gear and unbeatable performance.",
  },
  {
    id: 2,
    img: WORK2,
    heading: "WaveBeat",
    description: "Immersive sound, perfected.",
  },
  {
    id: 3,
    img: WORK3,
    heading: "Flyte",
    description: "Discover and book unforgettable journeys effortlessly.",
  },
];

const Work = () => {
  return (
    <div className="work-section">
      {work_data.map((i) => {
        return (
          <div className="work-card" key={i.id}>
            <h3>{i.heading}</h3>
            <p>{i.description}</p>
            <img src={i.img} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Work;
