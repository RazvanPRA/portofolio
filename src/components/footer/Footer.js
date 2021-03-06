import React from "react";
import SocialLogo from "./social-logo/SocialLogo";
import FacebookImg from "../../images/Facebook.png";
import GitHubImg from "../../images/Github.png";
import LinkedinImg from "../../images/Linkedin.png";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="flexDivFooter">
        <div className="flexIcon">
          <div>
            <SocialLogo
              className={"gitHub"}
              url={"https://github.com"}
              imgSource={GitHubImg}
            />
          </div>
          <div>
            <SocialLogo
              className={"linkedIn"}
              url={"https://linkedin.com"}
              imgSource={LinkedinImg}
            />
          </div>
          <div>
            <SocialLogo
              className={"facebook"}
              url={"https://www.facebook.com"}
              imgSource={FacebookImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
