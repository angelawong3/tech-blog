const editFormHandler = async (event) => {
  event.preventDefault();

  //   const userId = document.querySelector("#userId").value;
  const postId = document.querySelector("#postId").value;
  const postTitle = document.querySelector("#post-title").value;
  const postContent = document.querySelector("#post-content").value;

  const response = await fetch(`/api/post/${postId}`, {
    method: "PUT",
    body: JSON.stringify({
      postId,
      //   userId,
      postTitle,
      postContent,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to edit your post");
  }
  document.location.replace("/dashboard");
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/post/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  }
};

document
  .querySelector("#edit-post-form")
  .addEventListener("submit", editFormHandler);
document
  .querySelector("#delete-btn")
  .addEventListener("click", delButtonHandler);
