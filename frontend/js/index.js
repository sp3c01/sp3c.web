// --------------- ELEMENTS --------------- //

const banner = document.querySelector(".banner");
const container = document.querySelector(".container");

const login = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const inputName = document.getElementById("name");
const inputGender = document.getElementById("gender");

const chat = document.querySelector(".chat");
const chatForm = document.querySelector(".chat-form");
const chatInput = document.querySelector(".chat-textarea");
const chatMessages = document.querySelector(".chat-messages");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formatName = inputName.value.trim();

  user.name = formatName;
  user.id = crypto.randomUUID();
  user.color = getRandomColor();
  user.gender = inputGender.value;

  login.style.display = "none";

  setTimeout(() => {
    const image = document.createElement("img");
    image.src = "./images/loading.gif";
    image.style.width = "400px";
    container.appendChild(image);

    setTimeout(() => {
      container.removeChild(image);

      chat.style.display = "flex";
      banner.style.display = "flex";
    }, 1700);
  }, 0);

  connectWebSocket();
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessageSocket();
  chatInput.value = "";
});
