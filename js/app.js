document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  
  const grid = document.getElementById('roadmap-grid');
  const filtersContainer = document.getElementById('category-filters');
  const searchInput = document.getElementById('search-input');
  const noResults = document.getElementById('no-results');
  let currentCategory = 'All';

  // Render Features
  const featuresList = document.getElementById('features-list');
  if (featuresList) {
    featuresList.innerHTML = FEATURES.map(f => `
      <div class="feature-row">
        <div class="feature-row__icon">${createIcon(f.icon)}</div>
        <div class="feature-row__text"><strong>${f.title}</strong> — ${f.text}</div>
      </div>
    `).join('');
  }

  // Render Filters
  function renderFilters() {
    if (!filtersContainer) return;
    filtersContainer.innerHTML = CATEGORIES.map(cat => 
      `<button class="btn-pill ${cat === currentCategory ? 'active' : ''}" data-cat="${cat}">${cat}</button>`
    ).join('');
    
    filtersContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        currentCategory = e.target.dataset.cat;
        renderFilters();
        filterRoadmaps();
      });
    });
  }

  // Render Grid
  function renderGrid(roadmaps) {
    if (!grid) return;
    if (roadmaps.length === 0) {
      grid.style.display = 'none';
      noResults.style.display = 'block';
      return;
    }
    
    grid.style.display = 'grid';
    noResults.style.display = 'none';
    
    grid.innerHTML = roadmaps.map((r, i) => {
      const progress = getRoadmapProgress(r.id);
      let progressHtml = '';
      if (progress.total > 0 && progress.completed > 0) {
        progressHtml = `
          <div class="card__meta-item" style="color: var(--color-gold)">
            ${createIcon('check', 14)} ${progress.percent}% Done
          </div>
        `;
      }
      
      return `
      <div class="card" onclick="window.location.href='roadmap.html?id=${r.id}'" style="animation-delay: ${i * 0.05}s">
        <div class="card__image-wrap">
          ${r.isNew ? '<div class="card__tag">New</div>' : ''}
          <img src="${r.image}" alt="${r.title}" class="card__image" loading="lazy">
        </div>
        <div class="card__body">
          <div class="card__category">${r.category}</div>
          <h3 class="card__title">${r.title}</h3>
          <p class="card__desc">${r.description}</p>
          <div class="card__meta">
            <div class="card__meta-item">${createIcon('clock', 14)} ${r.estimatedHours || Math.round(r.modules.length * 3.5)} hrs</div>
            <div class="card__meta-item">${createIcon('modules', 14)} ${r.modules.length} modules</div>
            ${progressHtml}
            <div class="card__difficulty" title="${r.difficultyLabel}">
              ${difficultyBars(r.difficulty)}
            </div>
          </div>
        </div>
      </div>
    `}).join('');
  }

  // Filtering Logic
  window.resetFilters = () => {
    currentCategory = 'All';
    if (searchInput) searchInput.value = '';
    renderFilters();
    filterRoadmaps();
  };

  function filterRoadmaps() {
    const query = searchInput ? searchInput.value.toLowerCase() : '';
    const filtered = ROADMAPS.filter(r => {
      const matchCat = currentCategory === 'All' || r.category === currentCategory;
      const matchSearch = r.title.toLowerCase().includes(query) || 
                          r.tags.some(t => t.toLowerCase().includes(query)) ||
                          r.description.toLowerCase().includes(query);
      return matchCat && matchSearch;
    });
    renderGrid(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterRoadmaps);
  }

  // Initial Render
  renderFilters();
  filterRoadmaps();
});
