// script.js

// Mock data for projects
const projects = [
    {
      id: 1,
      title: "Solar Energy for Rural India",
      description: "Providing clean energy to 10,000 households.",
      image: "images/solar.jpg",
      category: "climate",
      progress: 75,
    },
    {
      id: 2,
      title: "Clean Water for Kenya",
      description: "Providing clean water to 5,000 people.",
      image: "images/water.jpg",
      category: "health",
      progress: 50,
    },
    {
      id: 3,
      title: "Education for Girls in Afghanistan",
      description: "Building schools and providing scholarships for 1,000 girls.",
      image: "images/education.jpg",
      category: "education",
      progress: 30,
    },
  ];
  
  // Function to display projects
  function displayProjects(filterCategory = "all") {
    const projectGrid = document.querySelector(".project-grid");
    projectGrid.innerHTML = ""; // Clear existing projects
  
    projects.forEach((project) => {
      if (filterCategory === "all" || project.category === filterCategory) {
        const projectCard = `
          <div class="project-card">
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="progress-bar">
              <div class="progress" style="width: ${project.progress}%;">${project.progress}% funded</div>
            </div>
          </div>
        `;
        projectGrid.innerHTML += projectCard;
      }
    });
  }
  
  // Function to handle search and filter
  function setupFilters() {
    const filterButtons = document.querySelectorAll(".filter-button");
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        displayProjects(category);
      });
    });
  }
  
  // Smooth scrolling for anchor links
  function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }
  
  // Handle "Submit Project" form
  function setupForm() {
    const form = document.querySelector("#submit-project-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for submitting your project! We will review it shortly.");
        form.reset();
      });
    }
  }
  
  // Initialize all functionality
  function init() {
    displayProjects(); // Display all projects by default
    setupFilters(); // Set up filter buttons
    setupSmoothScrolling(); // Enable smooth scrolling
    setupForm(); // Handle form submission
  }
  
  // Run the init function when the page loads
  document.addEventListener("DOMContentLoaded", init);