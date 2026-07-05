/* Dynamically creates skills, projects and experience cards from data.js. */
const skillsContainer = document.getElementById("skills-container");
const projectsContainer = document.getElementById("projects-container");
const experienceContainer = document.getElementById("experience-container");

skills.forEach(function (skill) {
  const card = document.createElement("div");
  card.classList.add("skill-card");
  card.innerHTML = `<h3>${skill.title}</h3><p>${skill.description}</p>`;
  skillsContainer.appendChild(card);
});

projects.forEach(function (project) {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
  projectsContainer.appendChild(card);
});

experiences.forEach(function (experience) {
  const card = document.createElement("div");
  card.classList.add("experience-card");
  card.innerHTML = `
    <h3>${experience.role}</h3>
    <p><strong>${experience.date}</strong></p>
    <p>${experience.description}</p>
  `;
  experienceContainer.appendChild(card);
});

/* Contact button interaction. */
const messageButton = document.getElementById("message-button");
const messageOutput = document.getElementById("message-output");

messageButton.addEventListener("click", function () {
  messageOutput.textContent = "Thanks for visiting my portfolio ✨";
});

/* Dark mode toggle. */
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "light mode"
    : "dark mode";
});
