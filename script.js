// LIGHTING TOGGLE
const lightToggle = document.getElementById("lightToggle");
const lightStatus = document.getElementById("lightStatus");
lightToggle.addEventListener("change", function () {
  lightStatus.textContent = this.checked ? "Lights are ON 💡" : "Lights are OFF 📴";
});

// TEMPERATURE CONTROLS
let temperature = 27;
const tempDisplay = document.getElementById("tempDisplay");
document.getElementById("tempUp").addEventListener("click", () => {
  temperature++;
  tempDisplay.textContent = `${temperature}°C`;
});
document.getElementById("tempDown").addEventListener("click", () => {
  temperature--;
  tempDisplay.textContent = `${temperature}°C`;
});
document.getElementById("tempAuto").addEventListener("click", () => {
  temperature = 27;
  tempDisplay.textContent = `${temperature}°C (Auto)`;
});

// MUSIC CONTROLS
document.getElementById("musicPlay").addEventListener("click", () => {
  alert("🎵 Music is now PLAYING");
});
document.getElementById("musicPause").addEventListener("click", () => {
  alert("⏸️ Music is PAUSED");
});
document.getElementById("musicNext").addEventListener("click", () => {
    alert("⏭️ Playing next track...");
  });  
