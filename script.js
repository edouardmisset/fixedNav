const nav = document.querySelector("#main");
const body = document.body;
const topNav = nav.offsetTop;
const navHeight = nav.offsetHeight;

document.addEventListener("scroll", () => {
  console.log();
  if (window.scrollY >= topNav) {
    body.classList.add("fixed-nav");
    body.style.paddingTop = `${navHeight}px`;
  } else {
    body.classList.remove("fixed-nav");
    body.style.paddingTop = `0px`;
  }
});
