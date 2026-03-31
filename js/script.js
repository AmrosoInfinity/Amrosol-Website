document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");
  const tokenBox = document.getElementById("token-box");

  // Token sudah diinject backend ke file HTML
  const token = tokenBox.dataset.token; // backend isi attribute data-token

  // Ganti hint jadi token setelah backend selesai
  if (token && token.length > 0) {
    setTimeout(() => {
      tokenBox.innerText = token;
      tokenBox.classList.remove("hint");
      tokenBox.style.background = "#fff";
      tokenBox.style.color = "#333";
      tokenBox.style.padding = "12px";
      tokenBox.style.borderRadius = "8px";
      tokenBox.style.animation = "fadeIn 1s ease-in";
    }, 2000); // delay opsional
  }

  // Copy ke clipboard
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(token).then(() => {
      btn.innerText = "✅ Disalin!";
      setTimeout(() => btn.innerText = "Salin", 1500);
    });
  });
});
