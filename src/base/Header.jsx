import { NavLink } from "react-router-dom";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
    return clsx("link", isActive && "active");
};

const Header = () => {

  return (
    <header>
       <nav>
        <ul className='routerList'>
          <li>
            <NavLink to="/" className={buildLinkClass}>Головна</NavLink>
          </li>
           <li>
            <NavLink to="/" className={buildLinkClass}>Список завдань</NavLink>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;