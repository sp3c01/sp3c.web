function createMessageElementSelf(content) {
  const div = document.createElement("div");
  const pre = document.createElement("pre");
  const p = document.createElement("p");

  div.classList.add("message-self");

  div.appendChild(pre);
  div.appendChild(p);

  pre.innerHTML += content;
  p.innerHTML = getHoursAndMinutes();

  return div;
}

function createMessageElementOther(userName, userColor, userGender, content) {
  const div = document.createElement("div");
  const span = document.createElement("span");
  const spanIcon = document.createElement("span");
  const pre = document.createElement("pre");
  const p = document.createElement("p");

  div.classList.add("message-self");
  div.classList.add("message-other");
  span.classList.add("message-other-sender");
  spanIcon.classList.add("message-other-gender");

  div.appendChild(span);
  div.appendChild(spanIcon);
  div.appendChild(pre);
  div.appendChild(p);

  span.innerHTML = userName;
  span.style.color = userColor;
  spanIcon.classList.add("material-symbols-outlined");
  spanIcon.innerHTML = genderOptions[userGender];

  pre.innerHTML += content;
  p.innerHTML = getHoursAndMinutes();

  return div;
}
