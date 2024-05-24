// Storing data in local storage
localStorage.setItem('name', 'My blog');

// Retrieving data from local storage
const username = localStorage.getItem('name');
console.log(username); 


document.getElementById('blogForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  const blogPost = {
      username: username,
      title: title,
      content: content
  };

  let blogPosts = localStorage.getItem('blogPosts');
  if (blogPosts) {
      blogPosts = JSON.parse(blogPosts);
  } else {
      blogPosts = [];
  }

  blogPosts.push(blogPost);
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

  window.location.href = 'posts.html';
});
