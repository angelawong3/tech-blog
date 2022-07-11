const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#name-signup").value;
  const password = document.querySelector("#password-signup").value;

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
