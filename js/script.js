// Ambil parameter dari URL (misalnya ?service=grab&userId=123&hashToken=abc)
const params = new URLSearchParams(window.location.search);
const service = params.get("service");
const userId = params.get("userId");
const hashToken = params.get("hashToken");

// URL backend (ganti sesuai host backend kamu)
const backendUrl = `https://backend.amrosol.com/token/${service}/${userId}/${hashToken}`;

async function loadToken() {
  try {
    const res = await fetch(backendUrl);
    if (!res.ok) {
      document.getElementById("token").textContent = "Token tidak ditemukan atau kadaluarsa";
      return;
    }
    const data = await res.json();
    document.getElementById("title").textContent = `Token ${data.service.toUpperCase()} untuk User ${data.userId}`;
    document.getElementById("token").textContent = data.token;
    document.getElementById("note").textContent = `Token ini akan kadaluarsa dalam ${data.ttl}.`;
  } catch (err) {
    document.getElementById("token").textContent = "Error mengambil token";
  }
}

document.getElementById("copyBtn").addEventListener("click", () => {
  const tokenText = document.getElementById("token").textContent;
  navigator.clipboard.writeText(tokenText)
    .then(() => alert("Token berhasil dicopy!"))
    .catch(err => alert("Gagal copy token: " + err));
});

loadToken();
