export function NavLink({
  href,
  children,
  icon,
  className = '',
  ...props
}) {
  return (
    <a href={href} className={className} {...props}>
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </a>
  );
}
