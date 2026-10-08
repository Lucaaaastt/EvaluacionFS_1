import { NavLink } from '../atoms/NavLink';

export function Navbar({ items = [] }) {
  return (
    <nav className="nav-links" aria-label="Navegación principal">
      {items.map((item) => (
        <NavLink
          key={item.id}
          href={item.href}
          icon={item.icon}
          className={item.className}
          target={item.target}
          rel={item.rel}
        >
          {item.text}
        </NavLink>
      ))}
    </nav>
  );
}
