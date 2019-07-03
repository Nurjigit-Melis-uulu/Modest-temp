let menuButton = document.querySelector("#menu-button");
let drawer = document.querySelector("nav .drawer");
let boll = false;
let backDrop = document.querySelector(".back-drop");
let carouselSlides = document.querySelectorAll("header ul li");
let carouselButtons = document.querySelectorAll("header .controls button");
const anchors = document.querySelectorAll('a[href*="#"]');

for (let i = 0; i < carouselButtons.length; i++) {
  const button = carouselButtons[i];
  button.addEventListener("click", function() {
    carouselButtons.forEach(b => (b.className = ""));
    this.className = "active";
    for (let index = 0; index < carouselSlides.length; index++) {
      carouselSlides[index].className = "";
      carouselSlides[i].className = "active";
    }
  });
}

backDrop.addEventListener("click", function() {
  drawer.style.transform = "translate(-100%)";
  backDrop.style.display = "none";
});

menuButton.addEventListener("click", function() {
  boll = !boll;

  if (boll) {
    drawer.style.transform = "translateX(0)";
    backDrop.style.display = "block";
  } else {
    drawer.style.transform = "translate(-100%)";
  }
});

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
