const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const usernameInput = document.querySelector("#user-login");
  const passwordInput = document.querySelector("#password-login");

  // Send a POST request to the API endpoint
  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameInput.value,
      password: passwordInput.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(username, password);

  if (response.ok) {
    // If successful, redirect the browser to your dashboard page
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
