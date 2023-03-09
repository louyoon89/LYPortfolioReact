import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer> 
      <section class="contactme">
          <h2 class="sectiontitle" id="contactme">Contact Me</h2>
          <ul class="mycontact">
              <li><a href="./assets/images/phone.jpg">213555555</a></li>
              <li><a href="https://www.gmail.com/">louyoon89@gmail.com</a></li>
              <li><a href="https://www.github.com/">github</a></li>
              <li><a href="https://www.twitter.com/">twitter</a></li>
          </ul>
      </section>
    </footer>
  );
}

export default Footer;