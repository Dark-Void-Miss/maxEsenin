import { Link } from "react-router-dom";

import s from "./Header.module.css";
import { NavBar } from "./NavBar/NavBar";
export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <div>
            <Link to="/Home">
              <img src="/public/Logo.svg" alt="" />
            </Link>
          </div>

          <NavBar></NavBar>
        </div>
      </header>
    </>
  );
};
