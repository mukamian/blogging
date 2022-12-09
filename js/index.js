const blogsContainer = document.getElementById("blogs-container");

const fetchBlog = async () => {
  const res = await fetch("http://localhost:6500/posts");
  if (!res.ok) {
    return;
  }
  const blogs = await res.json();

  blogs.forEach((blog) => {
    addBlog(blog);
  });
};

const addBlog = (blog) => {
  const template = `
     <div class="container_copy">
     <h3>${blog.author}</h3>
     <h1>- ${blog.title}</h1>
      <p>
          ${blog.body}
          
      </p>
      </div>     
    `;
  blogsContainer.innerHTML += template;
};

fetchBlog();
