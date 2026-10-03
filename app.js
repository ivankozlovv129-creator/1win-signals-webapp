// URL вашего API (получите его на Шаге 4)
const API_URL = 'https://one-win-signals-api.onrender.com';

document.getElementById('get-signal-btn').addEventListener('click', async () => {
  const selectedPair = document.getElementById('pair-select').value;
  try {
    const res = await fetch(`${API_URL}/api/signal?symbol=${encodeURIComponent(selectedPair)}&lang=${currentLang}`);
    const data = await res.json();
    if (data.success) {
      document.getElementById('probability').innerText = data.probability;
      document.getElementById('reason-text').innerText = data.reason;
      const dirBox = document.getElementById('direction-box');
      dirBox.innerText = data.direction;
      dirBox.className = data.is_higher ? 'direction-box' : 'direction-box down';
    }
  } catch (e) {
    console.error("Ошибка загрузки сигнала:", e);
  }
});