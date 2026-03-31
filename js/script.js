document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");
  const tokenBox = document.getElementById("token-box");
  const token = "1234567890abcdef"; // backend inject di file HTML

  // Delay tampil token
  setTimeout(() => {
    tokenBox.innerText = token;
    tokenBox.classList.remove("hint");
    tokenBox.style.background = "#fff";
    tokenBox.style.color = "#333";
    tokenBox.style.padding = "12px";
    tokenBox.style.borderRadius = "8px";
    tokenBox.style.animation = "fadeIn 1s ease-in";
  }, 2000);

  // Copy ke clipboard
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(token).then(() => {
      btn.innerText = "✅ Disalin!";
      setTimeout(() => btn.innerText = "Salin", 1500);
    });
  });
});
