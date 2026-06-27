document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderTimeline();
});

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  const emptyState = document.getElementById('empty-timeline');
  const currentLearning = document.getElementById('current-learning');
  const currentLearningContent = document.getElementById('current-learning-content');
  
  const timelineIds = getTimeline();
  
  if (timelineIds.length === 0) {
    container.style.display = 'none';
    currentLearning.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }
  
  container.style.display = 'block';
  emptyState.style.display = 'none';
  
  // Render Timeline Items
  container.innerHTML = timelineIds.map((id, index) => {
    const roadmap = getRoadmapById(id);
    if (!roadmap) return '';
    
    const progress = getRoadmapProgress(roadmap.id);
    const isCompleted = progress.percent === 100;
    const isActive = index === 0 && !isCompleted;
    
    let markerState = '';
    if (isCompleted) markerState = 'completed';
    else if (isActive) markerState = 'active';
    
    return `
      <div class="timeline__item ${markerState}" id="item-${id}" data-id="${id}">
        <div class="timeline__marker">${isCompleted ? createIcon('check') : index + 1}</div>
        <div class="timeline__card" draggable="true" ondragstart="dragStart(event, '${id}')" ondragover="dragOver(event)" ondrop="drop(event, '${id}')" ondragend="dragEnd(event)" onclick="if(!window.isDragging) window.location.href='roadmap.html?id=${id}'">
          <img src="${roadmap.image}" alt="${roadmap.title}" class="timeline__card-image">
          <div class="timeline__card-body">
            <div class="timeline__card-step">Step ${index + 1}</div>
            <h3 class="timeline__card-title">${roadmap.title}</h3>
            
            <div class="timeline__card-progress">
              <div class="progress-bar ${isCompleted ? 'progress-bar--gold' : ''}" style="flex:1">
                <div class="progress-bar__fill" style="width: ${progress.percent}%"></div>
              </div>
              <div class="timeline__card-progress-text">${progress.percent}%</div>
            </div>
            
            <div class="timeline__card-actions">
              <div style="display:flex;align-items:center;gap:4px;color:var(--color-ash-mute)">
                ${createIcon('grip', 16)} Drag to reorder
              </div>
              <button class="timeline__remove-btn" onclick="event.stopPropagation(); window.removeTimelineItem('${id}')">Remove</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Render Current Focus (First item if not completed)
  if (timelineIds.length > 0) {
    const firstRoadmap = getRoadmapById(timelineIds[0]);
    const progress = getRoadmapProgress(firstRoadmap.id);
    
    if (progress.percent < 100) {
      currentLearning.style.display = 'block';
      currentLearningContent.innerHTML = `
        <div style="display:flex;gap:24px;align-items:center;">
          <img src="${firstRoadmap.image}" style="width:120px;height:80px;object-fit:cover;border-radius:var(--radius-input)">
          <div style="flex:1">
            <h4 style="font-size:var(--text-subheading);font-weight:var(--fw-semibold);margin-bottom:8px">${firstRoadmap.title}</h4>
            <div style="display:flex;align-items:center;gap:16px">
              <div class="progress-bar" style="flex:1;max-width:300px">
                <div class="progress-bar__fill" style="width: ${progress.percent}%"></div>
              </div>
              <span style="font-size:var(--text-caption);color:var(--color-ash-mute)">${progress.completed} / ${progress.total} Modules</span>
            </div>
          </div>
          <a href="roadmap.html?id=${firstRoadmap.id}" class="btn btn-primary">Continue</a>
        </div>
      `;
    } else {
      currentLearning.style.display = 'none';
    }
  }
  
  initScrollAnimations();
}

// Drag and Drop Logic
let draggedId = null;

window.dragStart = (e, id) => {
  draggedId = id;
  e.dataTransfer.effectAllowed = 'move';
  setTimeout(() => {
    e.target.closest('.timeline__card').classList.add('dragging');
    window.isDragging = true;
  }, 0);
};

window.dragOver = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  const card = e.target.closest('.timeline__card');
  if (card && !card.classList.contains('dragging')) {
    card.classList.add('drag-over');
  }
};

window.dragEnd = (e) => {
  document.querySelectorAll('.timeline__card').forEach(c => {
    c.classList.remove('dragging');
    c.classList.remove('drag-over');
  });
  setTimeout(() => window.isDragging = false, 100);
};

window.drop = (e, targetId) => {
  e.preventDefault();
  document.querySelectorAll('.timeline__card').forEach(c => c.classList.remove('drag-over'));
  
  if (draggedId === targetId) return;
  
  const timeline = getTimeline();
  const draggedIndex = timeline.indexOf(draggedId);
  const targetIndex = timeline.indexOf(targetId);
  
  // Reorder array
  timeline.splice(draggedIndex, 1);
  timeline.splice(targetIndex, 0, draggedId);
  
  saveTimeline(timeline);
  renderTimeline();
};

window.removeTimelineItem = (id) => {
  if (confirm('Are you sure you want to remove this roadmap from your timeline?')) {
    removeFromTimeline(id);
    renderTimeline();
    showToast('Removed from timeline');
  }
};
