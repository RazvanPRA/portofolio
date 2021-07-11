import React from "react";
import Eu from "../../../images/Eu.jpeg";
import "./CVOnline.css";

function CVOnline() {
  return (
    <div className="containerCV">
      <div className="headerCV">
        <div>
          <div>
            <p>Razvan Gheorghe</p>
            <p>Prajanu</p>
          </div>
        </div>
        <div>
          <div>
            <p>Nicolae Labis, Nr.53, Bl. M16, Sc. 1, Ap 32, Brasov</p>
            <p>Brasov, Romania</p>
            <p>+40773962883</p>
            <p>prajanu.razvan@gmail.com</p>
            <p>
              <a
                href="https://www.linkedin.com/in/răzvan-gheorghe-prăjanu-0b729a1b3/"
                target="_blank"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>
        <div>
          <img src={Eu} alt=""></img>
        </div>
      </div>
      <div className="detailsCV">
        <div>
          <div className="lineCVDiv">
            <span className="lineCV"></span>
          </div>
          <div>
            <span className="titleCV">Education</span>
          </div>
        </div>
        <div>
          <div>2020-2021</div>
          <div>
            Front-end Web Development, "Informal School of IT", Specialization:
            "Junior Programmer".
          </div>
        </div>
        <div>
          <div>2020-2021</div>
          <div>
            The Web Developer Bootcamp 2021 from:
            <a
              href="https://www.udemy.com/course/the-web-developer-bootcamp/"
              target="_blank"
            >
              www.udemy.com
            </a>
          </div>
        </div>
        <div></div>
        <div>
          <div className="lineCVDiv">
            <span className="lineCV"></span>
          </div>
          <div>
            <span className="titleCV">Current Job</span>
          </div>
        </div>
        <div>
          <div>2016-Present</div>
          <div>
            Sales advisor, ANIMAX XXL, Brasov, a very large and complex pet
            store, whose focused policy meets the customer and the animal's
            needs by providing quality services and products.
          </div>
        </div>
        <div>
          <div>Achievements:</div>
          <div>
            <span></span> Improved presentation/social skills
          </div>
        </div>
        <div>
          <div className="lineCVDiv">
            <span className="lineCV"></span>
          </div>
          <div>
            <span className="titleCV">Programming Skills:</span>
          </div>
        </div>
        <div>
          <div>Entry Level</div>
          <div>JavaScript, ReactJS</div>
        </div>
        <div>
          <div className="lineCVDiv">
            <span className="lineCV"></span>
          </div>
          <div>
            <span className="titleCV">Computer skills</span>
          </div>
        </div>
        <div>
          <div>Entry Level</div>
          <div>Git</div>
        </div>
        <div>
          <div>Entry Level</div>
          <div>GitHub</div>
        </div>
        <div>
          <div>Junior Level</div>
          <div>VSCode</div>
        </div>
        <div>
          <div>Junior Level</div>
          <div>Figma</div>
        </div>
        <div>
          <div>Junior Level</div>
          <div>Asana</div>
        </div>
        <div>
          <div className="lineCVDiv">
            <span className="lineCV"></span>
          </div>
          <div>
            <span className="titleCV">Projects</span>
          </div>
        </div>
        <div>
          <div>17.02-05.03.2021</div>
          <div>
            My online CV - Preparation for employment as a front-end Web
            Developer
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVOnline;
