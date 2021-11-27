import React from "react";
import "../../App.css";
import shape from "../../assets/shape.png";
import "./Home.css";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import dreptunghi from "../../assets/Rectangle 23.png";
import { Carousel } from "react-responsive-carousel";
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
          <div className="textsus">Cum funcționează ?</div>
          <div className="textejos">
            <div className="stanga"></div>
            <div className="dreapta"></div>
          </div>
        </div>
      </div>
      <div className="caruselul">
        <Carousel>
          <div className="primaimagcar">
            <img src={dreptunghi} alt="" />
          </div>
          <div className="adouaimagcar">
            <img src={dreptunghi} alt="" />
          </div>
          <div className="atreiaimagcar">
            <img src={dreptunghi} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
