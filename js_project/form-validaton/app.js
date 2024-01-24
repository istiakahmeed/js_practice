let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("pass");
let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  // Corrected variable name
  e.preventDefault();
  // Reset previous validation styles
  nameInput.style.border = "1px solid #ccc";
  emailInput.style.border = "1px solid #ccc";
  passwordInput.style.border = "1px solid #ccc"; // Added line for password input

  // Simple name validation (non-empty)
  if (nameInput.value.trim() === "") {
    alert("Name cannot be empty");
    nameInput.style.border = "1px solid #ff5e5e";
    return;
  }

  // Simple email validation (non-empty and valid format)
  if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
    alert("Invalid email address");
    emailInput.style.border = "1px solid #ff5e5e";
    return;
  }

  // Simple password validation (non-empty)
  if (passwordInput.value.trim() === "") {
    alert("Password cannot be empty"); // Fixed typo in the alert message
    passwordInput.style.border = "1px solid #ff5e5e";
    return;
  }

  // If all fields are valid, call the getData function
  getData(nameInput.value, emailInput.value, passwordInput.value);
});

// Helper function to check valid email format
function isValidEmail(email) {
  // This is a simple regex for demonstration purposes. You may use a more sophisticated one.
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const URL = "https://jsonplaceholder.typicode.com/users";
function getData(name, email, password) {
  let data = {
    name: name,
    email: email,
    password: password,
  };
  fetchData(data);
  resetInput();
}

function fetchData(data) {
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function resetInput() {
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}
