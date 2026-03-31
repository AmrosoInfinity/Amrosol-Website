// Ambil parameter dari URL: https://amrosol.online/<service>/<userId>/<hashToken>
const pathParts = window.location.pathname.split("/").filter(Boolean);
const service = pathParts[0];      // grab / gojek
const userId = pathParts[1];       // user_id dari URL
const hashToken = pathParts[2];    // hash_token dari URL

async function loadToken() {
  try {
    const res = await fetch("data/token.json");
    if (!res.ok) {
      document.getElementById("token").textContent = "Token tidak ditemukan atau kadaluarsa";
      return;
    }

    const data = await res.json();

    // Validasi service + userId + hashToken
    if (data.service === service && data.userId === userId && data.hashToken === hashToken) {
      document.getElementById("title").textContent = `Token ${data.service.toUpperCase()} untuk User ${data.userId}`;
      document.getElementById("token").textContent = data.token;
      document.getElementById("note").textContent = `Token ini akan kadaluarsa dalam ${data.ttl}.`;
    } else {
      document.getElementById("token").textContent = "Token tidak ditemukan atau kadaluarsa";
    }
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
