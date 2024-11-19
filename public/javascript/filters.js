const scrollNav = document.querySelector(".scroll-nav");
const arrowIcons = document.querySelectorAll(".icon i");
const navbarToggler = document.querySelector("navbar-toggler");
const handleIcons = () => {
  let scrollVal = Math.round(scrollNav.scrollLeft);
  let maxScrollableWidth = scrollNav.scrollWidth - scrollNav.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
  arrowIcons[1].parentElement.style.display =
    maxScrollableWidth > scrollVal ? "flex" : "none";
};
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // console.log(icon.id);
    // if left icon is clicked reduce 350 from scrollNav scrollLeft else add
    scrollNav.scrollLeft += icon.id === "left" ? -350 : 350;
    setTimeout(() => handleIcons(), 50); // calling handleIcons after 50ms
  });
});
