var button = document.getElementById("check");
var result = document.getElementById("result");

if (button && result) {
  button.addEventListener("click", function () {
    result.textContent = "Скрипт на странице выполнился.";
  });
}
