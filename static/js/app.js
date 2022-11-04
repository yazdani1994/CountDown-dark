document.addEventListener("DOMContentLoaded", () => {
  var deadlineTimeUnix = new Date().getTime() / 1000 + 86400 * 3 + 1; // برای سه روز بعد

  const flipdown = new FlipDown(deadlineTimeUnix, "timer", {
    theme: "dark", // می توان بر روی light هم تنظیم کرد
  }).start();

  console.warn("شمارشگر آغاز شد");

  flipdown.ifEnded(function () {
    console.warn("شمارشگر به پایان رسید");
  });
});
