const estadoSesion = localStorage.getItem("estadoSesion");

if (estadoSesion === "Admin") {
    window.location.href = "/admin/dashboard";
}