import React from "react";
import "../../App.css";
import { shape } from "../../../public/shape.png";
import "./Home.css";
import { imagineprimaparte } from "../../../public/imagine-prima-parte.png";
//import Cards from "../Cards";
//import HeroSection from "../HeroSection";
//import Footer from "../Footer";

function Home() {
  return (
    <React.Fragment>
      <div className="forma-sus">
        <img src={shape} alt="shape" />
      </div>
      <div className="prima-parte">
        <div className="text-prima-parte">
          <p>Învățatul nu a fost niciodată mai simplu!</p>
          <p>
            Platforma ideală pentru meditații online, atât pentru profesori, cât
            si pentru studenți.
          </p>
        </div>
        <div className="imagine-prima-parte">
          <img src={imagineprimaparte} alt="x" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
