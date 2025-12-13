(() => {
  const btn = document.getElementById("modeSwitch");
  const saved = localStorage.getItem("theme");
  const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;

  if (saved === "dark" || (!saved && prefersDark)) {
    document.body.classList.add("dark");
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });
})();
