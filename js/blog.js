// Render blog posts from blog/posts.js (window.BLOG_POSTS)
try {
  const { posts } = window.BLOG_POSTS;
  const grid = document.getElementById('blogGrid');
  const fmt = d => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const block = b =>
    b.type === 'hr' ? '<hr class="post-hr">'
    : b.type === 'ul' ? `<ul class="post-list">${b.items.map(i => `<li>${i}</li>`).join('')}</ul>`
    : b.type === 'quote' ? `<blockquote class="post-quote">${b.text}</blockquote>`
    : b.type === 'h2' ? `<h4 class="post-h2">${b.text}</h4>`
    : b.type === 'h3' ? `<h5 class="post-h3">${b.text}</h5>`
    : `<p class="post-body">${b.text}</p>`;
  grid.innerHTML = posts
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(p => `
      <article class="post">
        <span class="post-meta">${fmt(p.date)} · ${p.source}</span>
        <h3 class="post-title">${p.title}</h3>
        ${p.excerpt ? `<p class="post-body">${p.excerpt}</p>` : ''}
        ${(p.content || []).map(par => `<p class="post-body">${par}</p>`).join('')}
        ${p.body && p.body.length ? `
          <details class="post-full">
            <summary>Read the full essay</summary>
            <div class="post-article">${p.body.map(block).join('')}</div>
          </details>` : ''}
        <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
        ${p.type === 'article' && p.link ? `<a class="post-link" href="${p.link}" target="_blank" rel="noopener">Originally published on LinkedIn ↗</a>` : ''}
      </article>`)
    .join('');
} catch (e) {
  document.getElementById('blogGrid').innerHTML =
    '<p class="blog-loading">Posts couldn\'t be loaded. Read my writing on <a href="https://linkedin.com/in/othmaneelmajid" target="_blank" rel="noopener">LinkedIn</a>.</p>';
}
