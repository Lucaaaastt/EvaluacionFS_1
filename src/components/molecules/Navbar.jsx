import { NavLink } from '../atoms/NavLink';

export function Navbar() {
  return (
    <nav className="nav-links" aria-label="Navegacion principal">
      <NavLink href="#inicio">Inicio</NavLink>
      <NavLink href="#catalogo">Catalogo</NavLink>
      <NavLink href="#sobre-nosotros">Sobre nosotros</NavLink>
    </nav>
  );
}
