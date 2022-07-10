const postId = document.querySelector('input[name="post-id"]').value;

const newCommentHandler = async (event) => {
  event.preventDefault();

  const commentContent = document
    .querySelector("#comment-content")
    .value.trim();

  if (commentContent) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ postId, commentContent }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to comment");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newCommentHandler);
