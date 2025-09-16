// Show current year
document.getElementById('year').textContent = new Date().getFullYear();

// Show local time
document.getElementById('time').textContent = new Date().toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit'
});
