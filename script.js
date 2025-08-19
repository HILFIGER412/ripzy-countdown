// Set your launch date here:

const countdownElement = document.getElementById("countdown");
  
const launchDate = new Date("2025-11-01T18:00:00-05:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "🚀 We're Live!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
