const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector("#user-login").value;
  const password = document.querySelector("#password-login").value;

  // Send a POST request to the API endpoint
  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  });

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
