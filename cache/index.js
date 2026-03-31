// Cache sederhana dengan TTL (time-to-live)
const cache = new Map();

function setToken(userId, service, hashToken, token, ttlMs = 120000) {
  const key = `${userId}:${service}:${hashToken}`;
  cache.set(key, token);

  // hapus otomatis setelah ttlMs (default 2 menit)
  setTimeout(() => {
    cache.delete(key);
  }, ttlMs);
}

function getToken(userId, service, hashToken) {
  return cache.get(`${userId}:${service}:${hashToken}`);
}

module.exports = { setToken, getToken };
