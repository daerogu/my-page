const btn = document.querySelector("#theme-btn");
const goatBtn = document.getElementById("goat-btn");

// 다크모드
btn.addEventListener("click", () => {
  // GOAT모드가 켜져 있으면 끄기
  document.body.classList.remove("goat");

  // 다크모드 ON / OFF
  document.body.classList.toggle("dark");
});

// GOAT모드
goatBtn.addEventListener("click", () => {
  // 다크모드가 켜져 있으면 끄기
  document.body.classList.remove("dark");

  // GOAT모드 ON / OFF
  document.body.classList.toggle("goat");
});