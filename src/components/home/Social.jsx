import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/angelo_p47/"
        className="home__social-icon"
        target={"_blank"} rel="noreferrer"
      >
        <i class="uil uil-instagram"></i>
      </a>
      <a
        href="https://twitter.com/angelo_pescetto"
        className="home__social-icon"
        target={"_blank"} rel="noreferrer"
      >
        <i class="uil uil-twitter-alt"></i>
      </a>
      <a
        href="https://github.com/angelop47"
        className="home__social-icon"
        target={"_blank"} rel="noreferrer"
      >
        <i class="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
