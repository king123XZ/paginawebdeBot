function generarCodigo() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let codigo = '';
  for (let i = 0; i < 6; i++) {
    codigo += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return codigo;
}

const codeBox = document.getElementById("codeBox");
const connectBtn = document.getElementById("connectBtn");
const codigo = generarCodigo();
codeBox.innerText = codigo; // Elimina el div de intro después de la animación
setTimeout(() => {
  const intro = document.getElementById("intro");
  if (intro) {
    intro.style.display = "none";
  }
}, 4000); // Tiempo en milisegundos (3s + 1s animación)


connectBtn.addEventListener("click", () => {
  alert(`Tu código único es: ${codigo}. Copialo y pégalo en WhatsApp con el bot para vincularte.`);
});
