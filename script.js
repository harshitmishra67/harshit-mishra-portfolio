const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
});

elements.forEach(el => observer.observe(el));
const nameText = "Harshit";
const roles = ["Tech Enthusiast", "Web Developer", "AI Learner"];

let nameIndex = 0;
let roleIndex = 0;
let charIndex = 0;

const nameEl = document.querySelector(".typing-name");
const rolesEl = document.querySelector(".typing-roles");

// TYPE NAME (once)
function typeName() {
  if (nameIndex < nameText.length) {
    nameEl.textContent += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeName, 100);
  } else {
    typeRoles();
  }
}

// TYPE ROLES (loop)
function typeRoles() {
  let currentRole = roles[roleIndex];

  if (charIndex < currentRole.length) {
    rolesEl.textContent += currentRole.charAt(charIndex);
    charIndex++;
    setTimeout(typeRoles, 60);
  } else {
    setTimeout(() => {
      rolesEl.textContent = "";
      charIndex = 0;
      roleIndex = (roleIndex + 1) % roles.length;
      typeRoles();
    }, 1500);
  }
}

typeName();

let skillsSection = document.querySelector(".skills");

window.addEventListener("scroll", () => {
  if (!skillsSection) return;
  let sectionTop = skillsSection.offsetTop;
  let scrollY = window.scrollY;
  let windowHeight = window.innerHeight;

  if (scrollY + windowHeight > sectionTop + 100) {
    const bars = document.querySelectorAll(".progress-fill");
    bars.forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  }
});
