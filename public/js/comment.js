const newCommentHandler = async (event) => {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;
  const commentContent = document
    .querySelector("#comment-content")
    .value.trim();

  if (postId && commentContent) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({
        commentContent,
        postId,
      }),
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
