import React from "react";
import { Link } from "react-router-dom";

function MainMenu(props) {
  return (
    <ul className="nav navbar-nav navbar-right">
    <li>
        <Link to={"/"}>
            Trang chủ
        </Link>
    </li>
    <li>
        <Link to={"/room"}>
            Phòng
        </Link>
    </li>
    <li>
        <Link to={"/contact"}>
            Liên hệ
        </Link>
    </li>
</ul>
  );
}

export default MainMenu;
