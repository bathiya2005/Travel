document.addEventListener("DOMContentLoaded", function() {
    const commentInput = document.querySelector('.comment-input');
    const commentBtn = document.querySelector('.comment-btn');
    const commentsContainer = document.querySelector('.comments');
  
    commentBtn.addEventListener('click', function() {
      const commentText = commentInput.value.trim();
      if (commentText !== '') {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = commentText;
        commentsContainer.appendChild(commentElement);
        commentInput.value = ''; // Clear the input after posting comment
      }
    });
  });
  