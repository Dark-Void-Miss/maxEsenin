import { NavLink} from "react-router-dom";

import s from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <>
  <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/Home" activeClassName={s.active}>
          Home
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Characters" activeClassName={s.active}>
          Characters
        </NavLink>
      </div>
    </nav>
    </>
  );
};
