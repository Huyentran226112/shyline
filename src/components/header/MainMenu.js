import React from "react";

function MainMenu(props) {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li>
        <a href="/" title="">
          home
        </a>
      </li>
      <li>
        <a href="/room" title="About">
          Room
        </a>
      </li>

      <li>
        <a href="contact.html" title="Contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default MainMenu;
