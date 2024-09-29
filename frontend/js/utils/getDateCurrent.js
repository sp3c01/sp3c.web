const chatDate = document.querySelector(".chat-date");

function getDateCurrent() {
  const date = new Date().toLocaleDateString();

  chatDate.textContent = date;
}

getDateCurrent();
