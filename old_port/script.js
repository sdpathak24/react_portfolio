// const scrollContainer = document.querySelector(".container");

// scrollContainer.addEventListener("wheel", (evt) => {
//   evt.preventDefault();
//   scrollContainer.scrollLeft += evt.deltaY;
// });

const cardContainer = document.querySelector(".card-container");
const cardDotsContainer = document.querySelector(".card-dots");
const cards = Array.from(document.querySelectorAll(".card"));
const cardDots = document.getElementById("cardDots");

var i = 0;
var txt = "Lorem ipsum dummy text blabla.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dot");
const navItems = document.querySelectorAll(".nav-items li");

// Options for the Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Adjust this threshold value as needed
};

// Intersection Observer callback function
function handleIntersection(entries) {
  entries.forEach((entry) => {
    const index = Array.from(sections).indexOf(entry.target);
    if (entry.isIntersecting && index !== -1) {
      dots.forEach((dot) => dot.classList.remove("filled"));
      dots[index].classList.add("filled");

      navItems.forEach((item) => item.classList.remove("underline"));
      navItems[index - 1].classList.add("underline");
      if (index != 2) {
        cardDots.style.display = "none";
      } else {
        cardDots.style.display = "flex";
      }
    }
  });
}

// Create a new Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

window.addEventListener("DOMContentLoaded", () => {
  const words = ["WebDev", "Music", "Networks", "IoT"];
  const typewriter = document.getElementById("typewriter");
  let wordIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < words[wordIndex].length) {
      typewriter.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 200); // Adjust typing speed here (in milliseconds)
    } else {
      setTimeout(erase, 1000); // Adjust delay between words here (in milliseconds)
    }
  }

  function erase() {
    if (charIndex > 0) {
      typewriter.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50); // Adjust erasing speed here (in milliseconds)
    } else {
      wordIndex++;
      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
      setTimeout(type, 500); // Adjust delay before typing next word here (in milliseconds)
    }
  }

  type();
});

// Create card dots
cards.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("card-dot");
  dot.addEventListener("click", () => scrollToCard(index));
  cardDotsContainer.appendChild(dot);
});

// Scroll to specific card
function scrollToCard(index) {
  const cardWidth = cards[0].offsetWidth;
  cardContainer.scrollLeft = index * cardWidth;
}

// Highlight active dot on scroll
cardContainer.addEventListener("scroll", () => {
  const cardWidth = cards[0].offsetWidth;
  const activeIndex = Math.round(cardContainer.scrollLeft / cardWidth);
  const dots = Array.from(document.querySelectorAll(".card-dot"));
  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
});

// const contact = document.getElementById("contact");
// const footer = document.getElementById("footer");
// const mail = document.getElementById("mail");

// contact.addEventListener("click", () => {
//   if (mail.style.display === "none") {
//     mail.style.display = "flex";
//     contact.classList.add("underline");
//   } else {
//     mail.style.display = "none";
//     contact.classList.remove("underline");
//   }
// });
