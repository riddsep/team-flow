const menu = ["Product", "Solution", "Enterprise", "Pricing"];

const navMenu = document.querySelector(".nav__menu");
menu.forEach((menuList) => {
  const createNavLink = document.createElement("a");
  createNavLink.setAttribute("href", "#");
  createNavLink.textContent = `${menuList}`;

  if (menuList === "Product" || menuList === "Solution") {
    createNavLink.className = "dropdown";
    const createImage = document.createElement("img");
    createImage.setAttribute("src", "icons/dropicon.png");
    createImage.className = "dropdown-icon";
    createNavLink.appendChild(createImage);
  }

  navMenu.appendChild(createNavLink);
});

const createModal = document.createElement("div");

function setModal() {
  createModal.className = `modal-overlay`;
  const componentModal = `
        <div class="modal-container">
          <h3>Coming soon 🥳</h3>
          <img src="icons/close.svg" alt="" class="close-icon" />
        </div>`;
  createModal.innerHTML = componentModal;

  const main = document.querySelector("main");
  main.appendChild(createModal);
  closeModal();
}

function closeModal() {
  const closeModal = document.querySelector(".close-icon");
  closeModal.addEventListener("click", () => {
    createModal.classList.remove("open-modal");
  });
}

function openModal() {
  setModal();
  createModal.classList.add("open-modal");
  closeModal();
}

const signUpBtn = document.querySelector(".sign-up-btn");
signUpBtn.addEventListener("click", openModal);

const loginBtn = document.querySelector(".login-btn");
loginBtn.addEventListener("click", openModal);

const getStartedBtn = document.querySelector(".cta--button");
getStartedBtn.addEventListener("click", openModal);
