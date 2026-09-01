/**
 * auth.js
 * ----------------------------------------
 * Maneja la autenticación de usuarios en el sistema:
 * - Almacena la lista de usuarios/admins (mock, en memoria).
 * - Valida el login (usuario + contraseña) y determina el rol.
 * - Gestiona el registro de nuevos usuarios (rol "usuario" por defecto).
 * - Redirige a la vista correspondiente (usuario o admin) según el rol.
 * - Guarda la sesión activa (ej: sessionStorage) para proteger las vistas.
 */