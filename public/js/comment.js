const newFormHandler = async (event) => {
    event.preventDefault();
    const textcomment = document.querySelector('#comment').value.trim();
    const blog_id = parseInt(document.querySelector('#blogID').innerHTML);
    if (textcomment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ textcomment, blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/blog/${blog_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };
  

  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);