document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  
  const urlParams = new URLSearchParams(window.location.search);
  const roadmapId = urlParams.get('id');
  const roadmap = getRoadmapById(roadmapId);
  const container = document.getElementById('content-wrap');
  
  if (!roadmap) {
    container.innerHTML = `
      <div class="empty-state" style="padding-top:160px">
        <h3 class="empty-state__title">Roadmap Not Found</h3>
        <p class="empty-state__desc">The roadmap you're looking for doesn't exist.</p>
        <a href="index.html" class="btn btn-primary">Back to Catalog</a>
      </div>
    `;
    return;
  }

  // Update Page Title
  document.title = `${roadmap.title} | CodePath`;

  function renderRoadmap() {
    const progress = getRoadmapProgress(roadmap.id);
    const inTimeline = isInTimeline(roadmap.id);
    const related = getRelatedRoadmaps(roadmap.id);

    const html = `
      <div class="roadmap-hero animate-on-scroll">
        <img src="${roadmap.image}" alt="${roadmap.title}" class="roadmap-hero__bg">
        <div class="roadmap-hero__overlay"></div>
        <div class="roadmap-hero__content">
          <div class="roadmap-hero__category">${roadmap.category}</div>
          <h1 class="roadmap-hero__title">${roadmap.title}</h1>
          <p class="roadmap-hero__desc">${roadmap.description}</p>
          <div class="roadmap-hero__actions">
            ${inTimeline ? 
              `<button class="btn btn-ghost" onclick="toggleTimeline()">${createIcon('check')} Added to Timeline</button>` : 
              `<button class="btn btn-primary" onclick="toggleTimeline()">${createIcon('plus')} Add to Timeline</button>`
            }
            <a href="#modules" class="btn btn-ghost">View Modules</a>
          </div>
        </div>
      </div>

      <div class="stats-card animate-on-scroll stagger-children">
        <div class="stats-card__item">
          <div class="stats-card__value gold">${roadmap.modules.length}</div>
          <div class="stats-card__label">Modules</div>
        </div>
        <div class="stats-card__item">
          <div class="stats-card__value">${roadmap.estimatedHours || Math.round(roadmap.modules.length * 3.5)}h</div>
          <div class="stats-card__label">Estimated Time</div>
        </div>
        <div class="stats-card__item">
          <div class="stats-card__value" style="display:flex;align-items:center;justify-content:center;gap:4px">
            ${difficultyBars(roadmap.difficulty)}
          </div>
          <div class="stats-card__label">${roadmap.difficultyLabel}</div>
        </div>
        <div class="stats-card__item">
          <div class="stats-card__value" id="progress-val">${progress.percent}%</div>
          <div class="stats-card__label">Completed</div>
        </div>
      </div>

      <div class="progress-section" id="progress-header" style="${inTimeline ? 'display:block' : 'display:none'}">
        <div class="container">
          <div class="progress-section__inner">
            <div class="progress-bar progress-bar--gold" style="flex:1">
              <div class="progress-bar__fill" id="progress-bar-fill" style="width: ${progress.percent}%"></div>
            </div>
            <div class="progress-section__text">
              <strong id="progress-text">${progress.completed} / ${progress.total}</strong> Modules
            </div>
          </div>
        </div>
      </div>

      <div class="section" id="modules">
        <div class="section-header animate-on-scroll">
          <div class="section-header__eyebrow">The Curriculum</div>
          <h2 class="section-header__title">Course Modules</h2>
        </div>
        
        <div class="module-list stagger-children">
          ${roadmap.modules.map((mod, idx) => {
            const isCompleted = isModuleCompleted(mod.id);
            return `
              <div class="module-item ${isCompleted ? 'completed' : ''}" id="mod-${mod.id}">
                <div class="module-item__marker">${idx + 1}</div>
                <div class="module-item__content">
                  <div class="module-item__header" onclick="toggleModule('${mod.id}')">
                    <div class="module-item__info">
                      <h3 class="module-item__title">${mod.title}</h3>
                      <div class="module-item__meta">
                        <div class="module-item__meta-item">${createIcon('clock', 14)} ${mod.duration}</div>
                        <div class="module-item__meta-item">${createIcon('video', 14)} ${mod.channel}</div>
                      </div>
                    </div>
                    <div class="module-item__toggle">${createIcon('chevron')}</div>
                  </div>
                  <div class="module-item__body">
                    <div class="module-item__body-inner">
                      <p class="module-item__desc">${mod.description}</p>
                      
                      <div class="video-embed" onclick="playVideo('${mod.id}', '${mod.youtubeId}')" id="video-${mod.id}">
                        <div class="video-embed__placeholder">
                          <img src="https://img.youtube.com/vi/${mod.youtubeId}/maxresdefault.jpg" alt="${mod.title}">
                          <div class="video-embed__play">${createIcon('play')}</div>
                        </div>
                      </div>

                      <div class="module-checkbox ${isCompleted ? 'checked' : ''}" onclick="markModule('${mod.id}')">
                        <div class="module-checkbox__box">${createIcon('check')}</div>
                        <span>Mark as completed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="section">
        <div class="section-header animate-on-scroll">
          <h2 class="section-header__title" style="font-size:48px">Next Steps</h2>
          <p class="section-header__desc">Continue your journey with these related roadmaps.</p>
        </div>
        <div class="catalog-grid stagger-children">
          ${related.map(r => `
            <div class="card" onclick="window.location.href='roadmap.html?id=${r.id}'">
              <div class="card__image-wrap">
                <img src="${r.image}" alt="${r.title}" class="card__image" loading="lazy">
              </div>
              <div class="card__body">
                <div class="card__category">${r.category}</div>
                <h3 class="card__title">${r.title}</h3>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    container.innerHTML = html;
    initScrollAnimations();
  }

  // Interactivity
  window.toggleTimeline = () => {
    if (isInTimeline(roadmap.id)) {
      removeFromTimeline(roadmap.id);
      showToast('Removed from timeline');
    } else {
      addToTimeline(roadmap.id);
      showToast('Added to timeline', 'magenta');
    }
    renderRoadmap();
  };

  window.toggleModule = (id) => {
    const el = document.getElementById(`mod-${id}`);
    el.classList.toggle('expanded');
    el.classList.toggle('active');
  };

  window.playVideo = (id, ytId) => {
    const container = document.getElementById(`video-${id}`);
    container.innerHTML = `<iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  };

  window.markModule = (id) => {
    const completed = toggleModuleCompletion(id);
    const modEl = document.getElementById(`mod-${id}`);
    const checkEl = modEl.querySelector('.module-checkbox');
    
    if (completed) {
      modEl.classList.add('completed');
      checkEl.classList.add('checked');
      showToast('Module completed! Keep going.', 'gold');
    } else {
      modEl.classList.remove('completed');
      checkEl.classList.remove('checked');
    }
    
    updateProgressUI();
  };

  function updateProgressUI() {
    const progress = getRoadmapProgress(roadmap.id);
    const valEl = document.getElementById('progress-val');
    const barEl = document.getElementById('progress-bar-fill');
    const textEl = document.getElementById('progress-text');
    
    if (valEl) valEl.textContent = `${progress.percent}%`;
    if (barEl) barEl.style.width = `${progress.percent}%`;
    if (textEl) textEl.textContent = `${progress.completed} / ${progress.total}`;
  }

  // Initial render
  renderRoadmap();
});
