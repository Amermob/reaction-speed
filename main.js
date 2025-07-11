let timer = 0;

const randomTimeStart = Math.ceil(Math.random() * 5);

document.querySelectorAll(".btn-start")[0].addEventListener("click", () => {
  const clock = setInterval(() => {
    document.querySelector(".bg-red").style.display = "none ";
    document.querySelector(".bg-green").style.display = "block ";
  }, `${randomTimeStart}000`);
  const timeForTimer = setInterval(() => {
    timer++;
  }, 1);
  document.querySelector(".btn-stop").onclick = () => {
    document.querySelector(".the-timer").textContent = `${timer} ms`;
    clearInterval(clock);
    clearInterval(timeForTimer);
      const restart = document.querySelectorAll(".btn-start")[1]
      restart.style.display = "block";
      restart.onclick = () => {
          window.location.reload()
      }
  };
});
