import { getPosts } from './fetch.js';
export async function renderPosts() {
  const posts = await getPosts();
  const postsDiv = document.getElementById('posts');
  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.innerHTML = `
    <div class="para">
      <h2>${post.title}</h2>
      <p>${post.intro}</p>
    </div>
    `;

    return postsDiv.appendChild(postDiv);
  });
}
