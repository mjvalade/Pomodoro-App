function formatTime(ms) {
  let seconds = Math.floor(ms % 60000 / 1000);
  let minutes = Math.floor(ms / 60000);
  if (seconds > 9){return `${minutes}:${seconds}`;}
  if (seconds <= 9){return `${minutes}:0${seconds}`;}  
}

module.exports = formatTime;
