document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");
  const tokenEl = document.getElementById("token");
  const token = tokenEl.innerText;

  // Token muncul setelah 2 detik dengan animasi
  setTimeout(() => {
    tokenEl.style.display = "inline-block";
    tokenEl.style.animation = "fadeIn 1s ease-in";
  }, 2000);

  // Copy ke clipboard
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(token).then(() => {
      btn.innerText = "✅ Disalin!";
      setTimeout(() => btn.innerText = "Salin", 1500);
    });
  });
});
