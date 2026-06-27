// CODEPATH — Roadmap Data Layer
const ROADMAPS = [
  {
    id: 'fullstack-java',
    title: 'Full-Stack Development with Java',
    shortTitle: 'Full-Stack Java',
    category: 'Full-Stack',
    difficulty: 3,
    difficultyLabel: 'Advanced',
    estimatedHours: 120,
    description: 'Master enterprise-grade full-stack development with Java, Spring Boot, REST APIs, SQL databases, and modern frontend technologies. This roadmap takes you from Java fundamentals to deploying production applications.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format',
    tags: ['Java', 'Spring Boot', 'SQL', 'REST API'],
    channels: ['Amigoscode', 'freeCodeCamp', 'Programming with Mosh'],
    isNew: false,
    modules: [
      { id: 'fj-1', title: 'Java Fundamentals', description: 'Learn Java syntax, variables, data types, control flow, loops, and basic I/O.', youtubeId: 'eIrMbAQSU34', duration: '3.5 hrs', channel: 'Programming with Mosh' },
      { id: 'fj-2', title: 'Object-Oriented Programming', description: 'Master classes, objects, inheritance, polymorphism, encapsulation, and abstraction.', youtubeId: 'pTB0EiLXUC8', duration: '1.5 hrs', channel: 'Programming with Mosh' },
      { id: 'fj-3', title: 'Data Structures & Algorithms', description: 'Arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching algorithms.', youtubeId: 'RBSGKlAvoiM', duration: '8 hrs', channel: 'freeCodeCamp' },
      { id: 'fj-4', title: 'SQL & Database Design', description: 'Relational databases, SQL queries, joins, indexing, normalization, and database design.', youtubeId: 'HXV3zeQKqGY', duration: '4 hrs', channel: 'freeCodeCamp' },
      { id: 'fj-5', title: 'Spring Boot Essentials', description: 'Build RESTful web services with Spring Boot. Learn dependency injection, auto-configuration.', youtubeId: '9SGDpanrc8U', duration: '3 hrs', channel: 'Amigoscode' },
      { id: 'fj-6', title: 'REST API Development', description: 'Design and build production-ready REST APIs. Learn HTTP methods, status codes, authentication.', youtubeId: '5YRMe5MnSMw', duration: '2 hrs', channel: 'Teddy Smith' },
      { id: 'fj-7', title: 'HTML, CSS & JavaScript', description: 'Frontend fundamentals: semantic HTML, CSS layouts (Flexbox, Grid), responsive design.', youtubeId: 'UB1O30fR-EE', duration: '2 hrs', channel: 'Traversy Media' },
      { id: 'fj-8', title: 'Full-Stack Java Project', description: 'Build a complete full-stack application combining Spring Boot backend with a modern frontend.', youtubeId: 'Ke90Tje7VS0', duration: '5 hrs', channel: 'Amigoscode' }
    ]
  },
  {
    id: 'python-programming',
    title: 'Python Programming & Automation',
    shortTitle: 'Python',
    category: 'Programming',
    difficulty: 1,
    difficultyLabel: 'Beginner',
    description: 'Start your programming journey with Python — the most versatile language in tech. From basics to web scraping, automation, and API development.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80&auto=format',
    tags: ['Python', 'Automation', 'Scripting', 'APIs'],
    channels: ['Corey Schafer', 'Tech With Tim', 'freeCodeCamp'],
    isNew: true,
    modules: [
      { id: 'py-1', title: 'Python Basics', description: 'Variables, data types, strings, numbers, operators, input/output, conditionals, and loops.', youtubeId: '_uQrJ0TkZlc', duration: '6 hrs', channel: 'Programming with Mosh' },
      { id: 'py-2', title: 'Data Structures in Python', description: 'Lists, tuples, dictionaries, sets, comprehensions, and built-in methods.', youtubeId: '8ext9G7xspg', duration: '2 hrs', channel: 'Tech With Tim' },
      { id: 'py-3', title: 'Functions & Modules', description: 'Define reusable functions, understand scope, work with modules and packages.', youtubeId: '9Os0o3wzS_I', duration: '1.5 hrs', channel: 'Corey Schafer' },
      { id: 'py-4', title: 'Object-Oriented Python', description: 'Classes, objects, inheritance, magic methods, property decorators.', youtubeId: 'JeznW_7DlB0', duration: '2 hrs', channel: 'Tech With Tim' },
      { id: 'py-5', title: 'File Handling & OS Module', description: 'Read/write files, work with CSV and JSON, navigate the file system.', youtubeId: 'Uh2ebFW8OYM', duration: '1 hr', channel: 'Corey Schafer' },
      { id: 'py-6', title: 'Web Scraping with Python', description: 'Extract data from websites using BeautifulSoup and Requests.', youtubeId: 'ng2o98k983k', duration: '1.5 hrs', channel: 'Tech With Tim' },
      { id: 'py-7', title: 'Python Automation Projects', description: 'Automate repetitive tasks: email sending, Excel manipulation, PDF processing.', youtubeId: 'PXMJ6FS7llk', duration: '3 hrs', channel: 'Tech With Tim' }
    ]
  },
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    shortTitle: 'AI & ML',
    category: 'AI/ML',
    difficulty: 3,
    difficultyLabel: 'Advanced',
    description: 'Dive deep into AI and machine learning — from mathematical foundations to neural networks and deep learning.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format',
    tags: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'TensorFlow'],
    channels: ['3Blue1Brown', 'StatQuest', 'freeCodeCamp'],
    isNew: false,
    modules: [
      { id: 'ml-1', title: 'Mathematics for ML', description: 'Linear algebra essentials: vectors, matrices, eigenvalues, and transformations.', youtubeId: 'fNk_zzaMoSs', duration: '3 hrs', channel: '3Blue1Brown' },
      { id: 'ml-2', title: 'Python for Data Science', description: 'NumPy, Pandas, and Matplotlib — the Python data science toolkit.', youtubeId: 'LHBE6Q9XlzI', duration: '4.5 hrs', channel: 'freeCodeCamp' },
      { id: 'ml-3', title: 'Statistics & Probability', description: 'Descriptive statistics, probability distributions, hypothesis testing.', youtubeId: 'zouPoc49xbk', duration: '8 hrs', channel: 'freeCodeCamp' },
      { id: 'ml-4', title: 'Supervised Learning', description: 'Linear regression, logistic regression, decision trees, random forests, SVMs.', youtubeId: '7eh4d6sabA0', duration: '5 hrs', channel: 'freeCodeCamp' },
      { id: 'ml-5', title: 'Unsupervised Learning', description: 'K-means clustering, hierarchical clustering, PCA, dimensionality reduction.', youtubeId: 'IUn8k5zSI6g', duration: '2 hrs', channel: 'StatQuest' },
      { id: 'ml-6', title: 'Neural Networks', description: 'The building blocks of deep learning: perceptrons, activation functions, backpropagation.', youtubeId: 'aircAruvnKk', duration: '1 hr', channel: '3Blue1Brown' },
      { id: 'ml-7', title: 'Deep Learning with TensorFlow', description: 'Build CNNs, RNNs, and transformer models. Image classification, NLP.', youtubeId: 'tPYj3fFJGjk', duration: '7 hrs', channel: 'freeCodeCamp' },
      { id: 'ml-8', title: 'ML Project: End to End', description: 'Build a complete ML pipeline: data collection, preprocessing, model training.', youtubeId: 'Wqmtf9SA_kk', duration: '3 hrs', channel: 'Nicholas Renotte' }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    shortTitle: 'Data Science',
    category: 'Data Science',
    difficulty: 2,
    difficultyLabel: 'Intermediate',
    description: 'Transform raw data into actionable insights. Learn statistics, data wrangling, visualization, SQL analytics, and dashboard building.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format',
    tags: ['Python', 'SQL', 'Pandas', 'Visualization', 'Power BI'],
    channels: ['Alex The Analyst', 'Ken Jee', 'freeCodeCamp'],
    isNew: false,
    modules: [
      { id: 'ds-1', title: 'Statistics Fundamentals', description: 'Mean, median, mode, standard deviation, distributions, correlation.', youtubeId: 'zouPoc49xbk', duration: '8 hrs', channel: 'freeCodeCamp' },
      { id: 'ds-2', title: 'Python for Data Analysis', description: 'Set up your data science environment. Jupyter notebooks, NumPy arrays.', youtubeId: 'LHBE6Q9XlzI', duration: '4.5 hrs', channel: 'freeCodeCamp' },
      { id: 'ds-3', title: 'Pandas Masterclass', description: 'DataFrames, series, filtering, grouping, merging, pivot tables.', youtubeId: 'vmEHCJofslg', duration: '2 hrs', channel: 'Keith Galli' },
      { id: 'ds-4', title: 'Data Visualization', description: 'Matplotlib, Seaborn, and Plotly. Create compelling charts, heatmaps.', youtubeId: 'UO98lJQ3QGI', duration: '1.5 hrs', channel: 'Keith Galli' },
      { id: 'ds-5', title: 'SQL for Data Analytics', description: 'Advanced SQL: window functions, CTEs, subqueries, and performance optimization.', youtubeId: 'HXV3zeQKqGY', duration: '4 hrs', channel: 'freeCodeCamp' },
      { id: 'ds-6', title: 'Exploratory Data Analysis', description: 'EDA workflows: data cleaning, handling missing values, feature engineering.', youtubeId: 'QWgg4w1SpJ8', duration: '1.5 hrs', channel: 'Ken Jee' },
      { id: 'ds-7', title: 'Dashboard Building with Power BI', description: 'Create interactive business dashboards with Power BI.', youtubeId: 'AGrl-H87pRU', duration: '2.5 hrs', channel: 'Alex The Analyst' }
    ]
  },
  {
    id: 'mern-stack',
    title: 'Web Development — MERN Stack',
    shortTitle: 'MERN Stack',
    category: 'Web Dev',
    difficulty: 2,
    difficultyLabel: 'Intermediate',
    description: 'Build modern web applications with MongoDB, Express.js, React, and Node.js. From responsive UIs to scalable APIs.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80&auto=format',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
    channels: ['Traversy Media', 'Net Ninja', 'JavaScript Mastery'],
    isNew: true,
    modules: [
      { id: 'mn-1', title: 'HTML & CSS Mastery', description: 'Semantic HTML5, CSS layouts with Flexbox and Grid, responsive design.', youtubeId: 'UB1O30fR-EE', duration: '2 hrs', channel: 'Traversy Media' },
      { id: 'mn-2', title: 'JavaScript ES6+ Deep Dive', description: 'Arrow functions, destructuring, promises, async/await, modules, classes.', youtubeId: 'hdI2bqOjy3c', duration: '2 hrs', channel: 'Traversy Media' },
      { id: 'mn-3', title: 'React Fundamentals', description: 'Components, JSX, props, state, hooks, routing, and state management.', youtubeId: 'w7ejDZ8SWv8', duration: '2 hrs', channel: 'Traversy Media' },
      { id: 'mn-4', title: 'Node.js & Express', description: 'Server-side JavaScript with Node.js. Build web servers, handle routing.', youtubeId: 'fBNz5xF-Kx4', duration: '3.5 hrs', channel: 'Traversy Media' },
      { id: 'mn-5', title: 'MongoDB & Mongoose', description: 'NoSQL database fundamentals. CRUD operations, schemas, models.', youtubeId: '-56x56UppqQ', duration: '1.5 hrs', channel: 'Traversy Media' },
      { id: 'mn-6', title: 'RESTful API Design', description: 'Design scalable APIs: resource naming, versioning, pagination.', youtubeId: '0oXYLzuucwE', duration: '2 hrs', channel: 'Academind' },
      { id: 'mn-7', title: 'Git & Version Control', description: 'Git workflows, branching strategies, merge conflicts, pull requests.', youtubeId: 'RGOj5yH7evk', duration: '1 hr', channel: 'freeCodeCamp' },
      { id: 'mn-8', title: 'Full MERN Project', description: 'Build and deploy a production-ready MERN application.', youtubeId: 'mrHNSanmqQ4', duration: '4 hrs', channel: 'JavaScript Mastery' }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Computing & DevOps',
    shortTitle: 'Cloud & DevOps',
    category: 'DevOps',
    difficulty: 3,
    difficultyLabel: 'Advanced',
    description: 'Master the infrastructure side of modern software. Docker, Kubernetes, CI/CD pipelines, AWS cloud services, and Infrastructure as Code.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format',
    tags: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform'],
    channels: ['TechWorld with Nana', 'freeCodeCamp', 'NetworkChuck'],
    isNew: false,
    modules: [
      { id: 'cd-1', title: 'Linux Essentials', description: 'Command line mastery: file system navigation, permissions, shell scripting.', youtubeId: 'sWbUDq4S6Y8', duration: '3 hrs', channel: 'freeCodeCamp' },
      { id: 'cd-2', title: 'Computer Networking', description: 'TCP/IP, DNS, HTTP/HTTPS, load balancers, firewalls, and VPNs.', youtubeId: 'qiQR5rTSshw', duration: '1.5 hrs', channel: 'NetworkChuck' },
      { id: 'cd-3', title: 'Docker Containers', description: 'Containerize applications with Docker. Images, containers, volumes, networks.', youtubeId: 'pg19Z8LL06w', duration: '3 hrs', channel: 'TechWorld with Nana' },
      { id: 'cd-4', title: 'Kubernetes Orchestration', description: 'Container orchestration at scale. Pods, services, deployments.', youtubeId: 'X48VuDVv0do', duration: '4 hrs', channel: 'TechWorld with Nana' },
      { id: 'cd-5', title: 'CI/CD Pipelines', description: 'Continuous Integration and Deployment with Jenkins, GitHub Actions.', youtubeId: 'scEDHsr3APg', duration: '2 hrs', channel: 'TechWorld with Nana' },
      { id: 'cd-6', title: 'AWS Cloud Practitioner', description: 'Amazon Web Services: EC2, S3, RDS, Lambda, IAM, VPC, and CloudFormation.', youtubeId: 'ulprqHHWlng', duration: '5 hrs', channel: 'freeCodeCamp' },
      { id: 'cd-7', title: 'Infrastructure as Code', description: 'Terraform fundamentals: providers, resources, modules, state management.', youtubeId: 'SLB_c_ayRMo', duration: '2.5 hrs', channel: 'freeCodeCamp' }
    ]
  }
];

const CATEGORIES = ['All', 'Full-Stack', 'Programming', 'AI/ML', 'Data Science', 'Web Dev', 'DevOps'];

const FEATURES = [
  { icon: 'video', title: 'Curated YouTube Content', text: '<strong>Handpicked videos</strong> from top educators like Traversy Media, freeCodeCamp, 3Blue1Brown, and more — no searching required.' },
  { icon: 'route', title: 'Structured Learning Paths', text: 'Each roadmap follows a <strong>logical progression</strong> from fundamentals to advanced topics, so you never skip a step.' },
  { icon: 'timeline', title: 'Personal Timeline', text: 'Arrange multiple roadmaps into <strong>your own learning schedule</strong>. Drag, reorder, and tackle them one by one.' },
  { icon: 'check', title: 'Track Your Progress', text: 'Mark modules complete as you go. Your <strong>progress is saved locally</strong> and syncs across sessions.' },
  { icon: 'stack', title: 'Industry-Aligned Skills', text: 'Roadmaps designed around <strong>real job requirements</strong> for CSE and IT roles at top tech companies.' },
  { icon: 'sparkle', title: 'Always Free', text: 'Every video is freely available on YouTube. We just <strong>organize the chaos</strong> into a clear learning journey.' }
];

const ICONS = {
  video: '<path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M3 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z"/>',
  route: '<path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-1.447-.894L15 4m0 13V4m0 0L9 7"/>',
  timeline: '<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>',
  check: '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
  stack: '<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>',
  sparkle: '<path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  modules: '<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>',
  chevron: '<path d="M19 9l-7 7-7-7"/>',
  play: '<polygon points="5,3 19,12 5,21"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>',
  close: '<path d="M6 18L18 6M6 6l12 12"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  arrow: '<path d="M14 5l7 7m0 0l-7 7m7-7H3"/>',
  trash: '<path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>',
  grip: '<path d="M8 6h.01M8 12h.01M8 18h.01M16 6h.01M16 12h.01M16 18h.01"/>',
  plus: '<path d="M12 4v16m8-8H4"/>',
  external: '<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>'
};
function createIcon(name, size = 24) { return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ''}</svg>`; }
function getRoadmapById(id) { return ROADMAPS.find(r => r.id === id); }
function getRelatedRoadmaps(currentId, limit = 3) {
  const current = getRoadmapById(currentId);
  if (!current) return ROADMAPS.slice(0, limit);
  const sameCategory = ROADMAPS.filter(r => r.id !== currentId && r.category === current.category);
  const others = ROADMAPS.filter(r => r.id !== currentId && r.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
}
function difficultyBars(level) {
  let html = '';
  for (let i = 1; i <= 3; i++) {
    const filled = i <= level ? 'filled' : '';
    const height = 6 + (i * 4);
    html += `<div class="card__difficulty-bar ${filled}" style="height: ${height}px;"></div>`;
  }
  return html;
}

// localStorage Helpers
function getProgress() { try { return JSON.parse(localStorage.getItem('codepath_progress') || '{}'); } catch { return {}; } }
function saveProgress(progress) { localStorage.setItem('codepath_progress', JSON.stringify(progress)); }
function isModuleCompleted(moduleId) { return getProgress()[moduleId] === true; }
function toggleModuleCompletion(moduleId) {
  const progress = getProgress();
  progress[moduleId] = !progress[moduleId];
  saveProgress(progress);
  return progress[moduleId];
}
function getRoadmapProgress(roadmapId) {
  const roadmap = getRoadmapById(roadmapId);
  if (!roadmap) return { completed: 0, total: 0, percent: 0 };
  const progress = getProgress();
  const total = roadmap.modules.length;
  const completed = roadmap.modules.filter(m => progress[m.id]).length;
  return { completed, total, percent: total > 0 ? Math.round((completed / total) * 100) : 0 };
}

function getTimeline() { try { return JSON.parse(localStorage.getItem('codepath_timeline') || '[]'); } catch { return []; } }
function saveTimeline(timeline) { localStorage.setItem('codepath_timeline', JSON.stringify(timeline)); }
function addToTimeline(roadmapId) {
  const timeline = getTimeline();
  if (!timeline.includes(roadmapId)) { timeline.push(roadmapId); saveTimeline(timeline); return true; }
  return false;
}
function removeFromTimeline(roadmapId) { saveTimeline(getTimeline().filter(id => id !== roadmapId)); }
function isInTimeline(roadmapId) { return getTimeline().includes(roadmapId); }

// Shared UI
function showToast(message, type = 'success') {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('visible'));
  setTimeout(() => { toast.classList.remove('visible'); setTimeout(() => toast.remove(), 300); }, 2500);
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.animate-on-scroll, .stagger-children').forEach(el => observer.observe(el));
}

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (navbar) window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 40));
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-close');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.add('open'));
    if (closeBtn) closeBtn.addEventListener('click', () => menu.classList.remove('open'));
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu.classList.remove('open')));
  }
}
