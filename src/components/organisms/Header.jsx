import { NavLink } from '../atoms/NavLink';
import { Navbar } from '../molecules/Navbar';
import '../../../style/Navbar.css';

export function Header({ items = [] }) {
  return (
    <header className="navbar">
      <NavLink href="#inicio" className="navbar-brand">
        TIENDA JDR
      </NavLink>
      <Navbar items={items} />
    </header>
  );
}
