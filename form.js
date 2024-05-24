   <script>
        function goBack() {
            window.location.href = 'index.html'; // Replace 'index.html' with the actual landing page file name if different
        }

        document.addEventListener('DOMContentLoaded', function() {
            const postsContainer = document.getElementById('postsContainer');
            let blogPosts = localStorage.getItem('blogPosts');

            if (blogPosts) {
                blogPosts = JSON.parse(blogPosts);

                blogPosts.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.className = 'post';

                    const postTitle = document.createElement('h2');
                    postTitle.textContent = post.title;
                    postElement.appendChild(postTitle);

                    const postContent = document.createElement('p');
                    postContent.textContent = post.content;
                    postElement.appendChild(postContent);

                    postsContainer.appendChild(postElement);
                });
            }
        });
    </script>
