import React from "react";
import "../../App.css";
import shape from "../../assets/shape.png";
import "./Home.css";
import dreptfata from "../../assets/dreptfata.png";
import dreptspate from "../../assets/dreptspate.png";
import imagineprimaparte from "../../assets/imagine-prima-parte.png";
//import Cards from "../Cards";
//import HeroSection from "../HeroSection";
//import Footer from "../Footer";

function Home() {
  return (
    <div className="divprincipalhome">
      <div className="forma-sus">
        <img src={shape} alt="shape" />
      </div>
      <div className="prima-parte">
        <div className="text-prima-parte">
          <p className="primul">Învățatul nu a fost niciodată mai simplu!</p>
          <p className="doi">
            Platforma ideală pentru meditații online, atât pentru profesori, cât
            si pentru studenți.
          </p>
        </div>
        <div className="imagine-prima-parte">
          <img src={imagineprimaparte} alt="x" />
        </div>
      </div>
      <div className="divdoi">
        <div className="dreptspate">
          <img src={dreptspate} alt="" />
        </div>
        <div className="dreptfata">
          <img src={dreptfata} alt="" />
          <div className="textsus">Cum functioneaza?</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
