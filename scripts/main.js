let menuButton = document.querySelector("#menu-button");
let drawer = document.querySelector("nav .drawer");
let boll = false;
let backDrop = document.querySelector(".back-drop");
let carouselSlides = document.querySelectorAll("header ul li");
let carouselButtons = document.querySelectorAll(".controls button");
let header = document.querySelector("header");
const anchors = document.querySelectorAll('a[href*="#"]');
const workLinks = document.querySelectorAll('a[href*="?work_"]');
const links = document.querySelectorAll(".nav-box a");

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

    if (anchor.getAttribute("href") === "#") {
      document.querySelector("body").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    for (let link of links) {
      if (link.getAttribute("href") === blockID) {
        link.className = "active";
      } else {
        link.className = "";
      }
    }
  });
}

for (const workLink of workLinks) {
  workLink.addEventListener("click", event => {
    event.preventDefault();
  });
}

let headerStatus = false;
let index = 0;

header.addEventListener("mousedown", () => {
  headerStatus = true;
  console.log(headerStatus);
});
document.addEventListener("mouseup", () => {
  headerStatus = false;
  console.log(headerStatus);
});
header.addEventListener("mousemove", () => {
  if (index < 4) {
    index++;
  } else {
    index = 0;
  }
  if (headerStatus) {
    for (let i = 0; i < carouselButtons.length; i++) {
      carouselButtons[i].className = "";
      carouselButtons[index].className = "active";

      for (let o = 0; o < carouselSlides.length; o++) {
        carouselSlides[o].className = "";
        carouselSlides[index].className = "active";
      }
    }
  }
  headerStatus = false;
});
