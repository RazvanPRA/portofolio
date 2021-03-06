import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="divAboutMe">
      <div className="contentAboutMe" id="aboutMeContent">
        <div id="aboutMeTitle">
          <div>
            <h2>
              <span id="fontAboutMe">About Me</span>
            </h2>
          </div>
          <div></div>
        </div>
        <div id="descriptionAboutMe">
          <div>
            <div>
              <span className="spaceInFrontText"></span>
              <span className="textAboutMeSize">
                I like hiking in nature every time the opportunity arises, and
                if I find garbage I take care to collect it (as much as my
                garbage bag allows), I love to socialize and I feel full of
                energy every time I meet the new world ":D" .
              </span>
            </div>
            <div></div>
            <div>
              <span className="spaceInFrontText"></span>
              <span className="textAboutMeSize">
                And related to my communication skills and the demand for new
                interpersonal relationships with those around me, whether I'm at
                work, at home or in any other location, I have no difficulties
                (in general), as I said, I feel very good when I know new people
                and I love new life experiences, as long as these experiences
                are constructive! Regarding my work skills (Hard Skills), I
                consider that I have a base on which to build a beautiful career
                in IT, the beginning is always difficult, but I learned how to
                look for what I need to learn, it is very important to know how
                to look and where to look, and most importantly DO NOT FORGET TO
                READ THE DOCUMENTATION from the section that interests you (I
                learned this by mistake).
              </span>
            </div>
            <div></div>
          </div>
          <div></div>
          <div>
            <div>
              <span className="spaceInFrontText"></span>{" "}
              <span className="textAboutMeSize">
                I am 27 years old, I will soon be 28 years old, I was born in
                Brasov in June.
              </span>
            </div>
            <div></div>
            <div className="textAboutMeSize">
              <span className="spaceInFrontText"></span>
              <span className="textAboutMeSize">
                With the advent of the pandemic, I rediscovered programming and
                the fact that it is much more pleasant when you are not forced
                to memorize features, this aspect being in fact what aroused in
                me the desire to start learning programming in my own way and
                using everything I can. makes Mr. Googel available. I would be
                lying if I didn't mention the fact that the mentors of the
                Informal School didn't support my desire to push my limits and
                learn in a relatively short time the use of the javaScript
                programming language and the use of React libraries. It all
                started in the last week of July 2020 {`<`}3.
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
