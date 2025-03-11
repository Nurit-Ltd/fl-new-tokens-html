document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".berger-button");
  const sidebarMenu = document.getElementById("sidebarMenu");
  const closeMenu = document.getElementById("closeMenu");
  const overlay = document.getElementById("sidebarOverlay");

  // Function to open menu
  function openMenu() {
    sidebarMenu.classList.add("active");
    overlay.classList.add("active");
  }

  // Function to close menu
  function closeSidebar() {
    sidebarMenu.classList.remove("active");
    overlay.classList.remove("active");
  }

  // Event Listeners
  menuButton.addEventListener("click", openMenu);
  closeMenu.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);
});

// NavBar

// watchlist switch button toggle

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".switch-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to the clicked button
      button.classList.add("active");
    });
  });
});

// Watchlist items

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".watchlist-items-wrapper");
  const content = wrapper.innerHTML;

  // Wrap the content for the marquee effect
  wrapper.innerHTML = `<div class="marquee-track">${content}${content}</div>`;
});

// Timeframe filter control

const timeButtons = document.querySelectorAll(".time-filters button");
const searchInput = document.getElementById("searchInput");

timeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const timeframe = button.textContent;
    searchInput.placeholder = `Search New Tokens (${timeframe})`;

    timeButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// customize-btn start

document.addEventListener("DOMContentLoaded", function () {
  const customizeBtn = document.getElementById("customizeBtn");
  let view_inputs = document.querySelectorAll(".view-input");
  let cust_header_btns = document.querySelectorAll(".cust-header-btns");
  // let allContents = document.querySelectorAll("");

  console.log(view_inputs);

  if (customizeBtn) {
    console.log(customizeBtn);
    customizeBtn.addEventListener("click", function () {
      console.log("ami customize-btn");
    });
  } else {
    console.warn("customize-btn not found");
  }

  view_inputs.forEach((input) => {
    console.log(input);
    input.addEventListener("change", function () {
      const prevDiv = input.previousElementSibling;
      console.log(prevDiv);
      if (prevDiv && prevDiv.tagName === "DIV") {
        prevDiv.style.backgroundColor = input.checked ? "#456EEB" : "";
      }
    });
  });

  cust_header_btns.forEach((button) => {
    button.addEventListener("click", function () {
      console.log(button.classList);
      cust_header_btns.forEach((btn) =>
        btn.classList.remove("cus-modal-header-active")
      );

      button.classList.add("cus-modal-header-active");
      console.log(button.attributes.name);
      document.getElementsByClassName(button.attributes.name).addEventListener;
    });
  });
});
