const tabs = document.querySelectorAll(".tab");
const panes = document.querySelectorAll(".pane");
const cursorDot = document.querySelector(".cursor-dot");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
    panes.forEach((pane) => pane.classList.toggle("is-active", pane.dataset.pane === target));
  });
});

if (cursorDot) {
  window.addEventListener("mousemove", (event) => {
    cursorDot.style.left = `${event.clientX}px`;
    cursorDot.style.top = `${event.clientY}px`;
  });
}
