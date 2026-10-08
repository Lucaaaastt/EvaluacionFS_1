import { NavLink } from '../atoms/NavLink';

export function FooterLinks({ items = [] }) {
  return (
    <nav className="footer-links" aria-label="Enlaces del footer">
      {items.map((item) => (
        <NavLink key={item.id} href={item.href} target={item.target} rel={item.rel}>
          {item.text}
        </NavLink>
      ))}
    </nav>
  );
}
