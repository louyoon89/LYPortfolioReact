import React from "react";
import "./About.css";

import avatarMaker from "./AvatarMaker.png";

export default function About() {
  return (
    <section>
      <h1>About Me</h1>
      <div className="aboutme">
        <div class="profilepic" title="profilepic">
          <img
            className="profile-picture"
            src={avatarMaker}
            alt="George Melies moon rocket"
          ></img>
        </div>
        <p class="aboutmecontent">
          My name is Louis Yoon. I have no prior developing experience and
          learning from scratch. I am enjoying coding and would love the
          opportunity to switch careers into this field. I am almost done with
          bootcamp.
        </p>
      </div>
    </section>
  );
}
