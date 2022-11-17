const UpdatePostHandler = async (event) => {
    event.preventDefault();
  
      const id = event.target.getAttribute("data-id");
  
      const title = document.querySelector("#post-title").value.trim();
      const content = document.querySelector("#post-content").value.trim();
  
      if (title && content) {
          const response = await fetch(`/api/blogs/${id}`, {
          method: "PUT",
          body: JSON.stringify({ title, content }),
          headers: {
              "Content-Type": "application/json",
          },
          });
  
          if (response.ok) {
              document.location.replace("/dashboard");
          } else {
              alert("Failed to create post!");
          }
      }
  
  };
  
  document
    .querySelector("#update-post")
    .addEventListener("click", UpdatePostHandler);