import React from "react";

function SocialLogo({ className, url, imgSource }) {
  return (
    <div className={className}>
      <a href={url}>
        <img src={imgSource} alt=""></img>
      </a>
    </div>
  );
}

export default SocialLogo;
