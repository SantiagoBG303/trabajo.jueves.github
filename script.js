// Espera a que cargue el documento
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const input = document.querySelector("input");
  const container = document.querySelector(".container");

  button.addEventListener("click", () => {
    let valor = input.value.trim();

    if (valor === "") {
      mostrarMensaje("Por favor escribe algo ✍️", "error");
    } else {
      mostrarMensaje(`Hola ${valor}! 👋`, "success");
      input.value = "";
    }
  });

  // Función para mostrar mensaje dentro del contenedor
  function mostrarMensaje(texto, tipo) {
    const msg = document.createElement("p");
    msg.textContent = texto;
    msg.style.padding = "10px";
    msg.style.borderRadius = "10px";
    msg.style.marginTop = "15px";
    msg.style.animation = "fadeIn 0.5s ease";

    if (tipo === "success") {
      msg.style.background = "#c8e6c9";
      msg.style.color = "#2e7d32";
    } else {
      msg.style.background = "#ffcdd2";
      msg.style.color = "#c62828";
    }

    container.appendChild(msg);

    // Elimina el mensaje después de 3 segundos
    setTimeout(() => {
      msg.remove();
    }, 3000);
  }
});

// Animación CSS vía JS (se inyecta)
const style = document.createElement("style");
style.textContent = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(style);
