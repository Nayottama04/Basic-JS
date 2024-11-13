const toggleBtn = document.getElementById('dark-mode-toggle');
const articlesContainer = document.querySelector('.articles');
const searchBar = document.querySelector('.search-bar');

// Toggle dark mode and change icon
toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
  toggleBtn.textContent = document.documentElement.classList.contains('dark-theme') ? '🌙' : '🌞';
});

// Function to render articles based on filtered data
function displayArticles(articlesList) {
  const articlesData = articlesList
    .map((article) => {
      const { title, date, length, snippet, image } = article;
      const formatDate = moment(date).format('MMMM Do, YYYY');
      return `<article class="post">
            <h2>${title}</h2>
            <div class="post-info">
              <span>${formatDate}</span>
              <span>${length} min read</span>
            </div>
            <img src="${image}" alt="${title}" class="post-image" />
            <p>
              ${snippet}
            </p>
          </article>`;
    })
    .join('');
  articlesContainer.innerHTML = articlesData;
}

// Initial display of all articles
displayArticles(articles);

// Filter articles based on search query
searchBar.addEventListener('input', (e) => {
  const searchQuery = e.target.value.toLowerCase();
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery)
  );
  displayArticles(filteredArticles);
});
