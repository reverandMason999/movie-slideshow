window.addEventListener("DOMContentLoaded", (e) => {
  let stage = document.getElementById("stage");
  const fadeComplete = (e) => {
    stage.appendChild(arr[0]);
  };
  const arr = stage.getElementsByTagName("img");
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("animationend", fadeComplete, false);
  }
});
