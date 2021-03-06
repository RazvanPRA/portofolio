import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Nature from "../../../images/Nature.jpg";
import CurriculumVitae from "../../../images/CurriculumVitae.jpg";
import Aquarium from "../../../images/Aquarium.jpeg";
import "./Home.css";

function Home({ setCurrentScreen }) {
  return (
    <div>
      <div id="carousel">
        <div className="carouselDiv">
          <CarouselProvider
            naturalSlideWidth={140}
            naturalSlideHeight={60}
            totalSlides={3}
            isPlaying={true}
            interval={3000}
          >
            <Slider>
              <Slide index={0}>
                <img
                  id="AMImg"
                  src={Nature}
                  alt=""
                  onClick={() => {
                    setCurrentScreen("About Me");
                  }}
                ></img>
              </Slide>
              <Slide index={1}>
                <img
                  id="CVImg"
                  src={CurriculumVitae}
                  alt=""
                  onClick={() => {
                    setCurrentScreen("CV-online");
                  }}
                ></img>
              </Slide>
              <Slide index={2}>
                <img
                  id="AquariumImg"
                  src={Aquarium}
                  alt=""
                  onClick={() => {
                    setCurrentScreen("Hobbies");
                  }}
                ></img>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>

      <div>
        <h1 className="homeTextH1">
          <p className="textHome">
            <strong>It’s time to change your life,</strong>
          </p>
        </h1>
        <h1 className="homeTextH1">
          <p className="textHome">
            <strong>grow up and forget about the comfort zone !</strong>
          </p>
        </h1>
      </div>
      <div>
        <div className="buttonHomeDiv">
          <button
            className="buttonHome"
            onClick={() => {
              setCurrentScreen("Tehnical Skill (mini project)");
            }}
          >
            <h1>Get up</h1>
          </button>
        </div>
      </div>
      <div className="buttonHomeDiv">
        <div>
          <button
            className="buttonHome"
            onClick={() => {
              setCurrentScreen("CV-online");
            }}
          >
            <h5>
              <p>Curriculum</p>

              <p>Vitae</p>
            </h5>
          </button>
        </div>
        <div>
          <button
            className="buttonHome"
            onClick={() => {
              setCurrentScreen("About Me");
            }}
          >
            <h5>
              <p>About</p>
              <p>Me</p>
            </h5>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
