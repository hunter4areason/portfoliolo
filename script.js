const topbar = document.querySelector(".topbar");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  topbar.classList.toggle("open");
});

document.querySelectorAll(".topbar nav a").forEach((link) => {
  link.addEventListener("click", () => topbar.classList.remove("open"));
});

console.log(
`> hunter@portfolio
> status: online
> stack: HTML / CSS / JavaScript
> ready.`
);
