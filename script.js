const email = document.getElementById("email");
const button = document.getElementById("btn");
const form = document.getElementById("form");
const error = document.getElementById("error");
const userEmail = document.getElementById("user");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.value) {
    email.style.borderColor = "red";
    error.innerText = "input an email";
    return;
  } else {
    error.innerText = " ";
    email.style.borderColor = "hsl(234, 29%, 20%)";
  }

  if (!emailRegex.test(email.value)) {
    email.style.borderColor = "red";
    error.innerText = "input a valid email";
    return;
  } else {
    error.innerText = " ";
    email.style.borderColor = "hsl(234, 29%, 20%)";
  }

  console.log("form submitted");

  // redirecting manually after validation
window.location.href = `/success.html?email=${encodeURIComponent(email.value)}`;
});
