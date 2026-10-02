
export function Button({
  children,           // El contenido interno del botón (texto, íconos u otros elementos HTML).
  onClick,            // La función que se ejecutará al hacer clic en el botón.
  type = 'button',    // Tipo de botón HTML ('button', 'submit', 'reset'). Por defecto es 'button'.
  disabled = false,   // Define si el botón está deshabilitado. Por defecto es false (está activo).
  className = '',     // Clases CSS adicionales para personalizar su estilo. Por defecto está vacío.
}) {
  // Retornamos el elemento nativo de HTML <button>
  return (
    <button
      type={type}         // Asigna el tipo de botón al atributo nativo de HTML.
      onClick={onClick}   // Vincula el evento de clic nativo a la función recibida por prop.
      disabled={disabled} // Define el estado de deshabilitado nativo del botón HTML.
      className={className} // Aplica las clases CSS para dar estilo al botón.
    >
      {children}          // Renderiza lo que pongas dentro de las etiquetas <Button>...</Button>.
    </button>
  );
}