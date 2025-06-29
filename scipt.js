window.addEventListener("load", () => {
  const curtain = document.getElementById("curtain");
  document.body.style.overflow = "hidden";

  curtain.addEventListener("animationend", (e) => {
    if (e.animationName === "ascend") {
      curtain.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
