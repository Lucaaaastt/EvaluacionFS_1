import { NavLink } from '../atoms/NavLink';

export function FooterLinks() {
  return (
    <nav className="footer-links" aria-label="Enlaces del footer">
      <NavLink href="#inicio">Inicio</NavLink>
      <NavLink href="#sobre-nosotros">Sobre nosotros</NavLink>
      <NavLink
        href="https://github.com/Lucaaaastt/EvaluacionFS_1"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </NavLink>
    </nav>
  );
}
