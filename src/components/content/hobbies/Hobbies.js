import React from "react";
import Aquarium from "../../../images/Aquarium.jpeg";
import FirstImageAqvarium from "../../../images/FirstImageAqvarium.jpg";
import SecondImageAquarium from "../../../images/SecondImageAquarium.jpg";
import ThiedImageAquarium from "../../../images/ThiedImageAquarium.jpg";
import "./Hobbies.css";

function Hobbies() {
  return (
    <div className="hobbiesContent">
      <div id="topSpaceForAquarium">
        <div id="aquarium">
          <img src={Aquarium} alt="" />
          <div></div>
        </div>
      </div>
      <div id="freeSpace"></div>
      <div>
        <div>
          <div id="fontTitleHobby">Aquascaping</div>
          <div className="textContent">
            <div>
              <span className="spaceInFrontText"></span>Welcome to my hobby
              page, here you will have some descriptions of what this complex
              activity entails, and if you want to start developing a
              mini-ecosystem, I warmly recommend you to access the links in the
              images below, with these being mentioned I can begin the
              description of my hobby.
            </div>
            <div>
              <span className="spaceInFrontText"></span>First of all, aquarium
              is not just about water and fish, it is more than putting a fish
              or a plant in an aquarium and seeing what happens. Basically,
              science is everything that happens, and as a small parenthesis, it
              is good to know that plants are harder to take care of than fish,
              and this must be mentioned from the very beginning!
            </div>
            <div>
              <span className="spaceInFrontText"></span>First of all, aquarium
              is not just about water and fish, it is more than putting a fish
              or a plant in an aquarium and seeing what happens. Basically,
              science is everything that happens, and as a small parenthesis, it
              is good to know that plants are harder to take care of than fish,
              and this must be mentioned from the very beginning!
            </div>
            <div>
              <span className="spaceInFrontText"></span>But although I do not
              recommend anyone to "start on this path", I will make a small
              introduction to what must be taken into account from the
              beginning: The first and most important thing is to understand the
              phenomenon of "nitrogen cycle", otherwise ammonia (NH4 ) and
              ammonium (NH3) if they are not kept under control by the
              development of bacterial cultures, and this means that their
              values ​​always tend to 0, we can have big problems in the
              aquarium, such as the death of fish (given that these substances
              chemicals are dangerous acids from feces, excess food, residues,
              etc.).
            </div>
            <div>
              <span className="spaceInFrontText"></span>Bacterial culture
              develops slowly (it takes about 20 hours for a bacterium of this
              kind to divide), so you must be careful what steps you follow in
              the development of these bacteria or in time to make sure they do
              not die (aquarium recycling) , and the second thing that is very
              important to understand from the beginning, is the light cycle,
              the excess light affects the life of the fish, the damage of the
              plants and the excessive development of the algae.
            </div>
            <div>
              <span className="spaceInFrontText"></span>But what I mentioned
              above will not take more than a day to understand the principles
              of the operation of an ideal aquarium (I started from 0
              information and knowledge, without anyone to explain to me where I
              am doing well and where I am wrong , so if I can, maybe anyone, be
              patient).
            </div>
            <div>
              <span className="spaceInFrontText"></span>But the part I prefer in
              this hobby is the beauty you can create in the aquarium and the
              fact that you can express your imagination as you wish, plus you
              learn to be patient, and you relax by building an ecosystem right
              on your desk.
            </div>
            <div>
              <span className="spaceInFrontText"></span>As the name
              "Aquascaping", it is the art of recreating an image of nature or
              how you would like nature to look.
            </div>
            <div>
              <span className="spaceInFrontText"></span>As an example, this
              aquarium that you can see on your left is made by me and my
              colleagues, and it is not difficult to maintain, the difficulties
              come when it has to be rearranged from 0, but the satisfaction
              unlike other activities does not come with completion of the
              project, but comes in even during the development and creation of
              this aquarium. If I made you curious about aquascaping, I wish you
              good luck and a lot of patience, you need both.
            </div>
          </div>
        </div>
        <div id="imgsHobby">
          <div>
            <a href="https://aquascapinglove.com" target="_blank">
              <button>
                <img src={FirstImageAqvarium} alt="" />
              </button>
            </a>
          </div>
          <div>
            <a
              href="https://dennerle.com/en
/service/plant-database"
              target="_blank"
            >
              <button>
                <img src={SecondImageAquarium} alt="" />
              </button>
            </a>
          </div>
          <div>
            <a
              href="https://tropica.com/en/guide
/get-the-right-start/tropica-90-days-app/"
              target="_blank"
            >
              <button>
                <img src={ThiedImageAquarium} alt="" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
