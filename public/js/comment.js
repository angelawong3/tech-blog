console.log("im in comment.js");
const newCommentHandler = async (event) => {
  event.preventDefault();

  const postId = document.querySelector("#postId").value;
  const userId = document.querySelector("#userId").value;
  const commentContent = document.querySelector("#comment-content").value;

  if (commentContent) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({
        postId,
        userId,
        commentContent,
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
