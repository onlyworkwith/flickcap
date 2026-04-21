/* ══════════════════════════════════════════════════
   Kalakar Dashboard — Interactions
   ══════════════════════════════════════════════════ */

// ── Upload Zone drag-and-drop ──
const uploadZone = document.getElementById('upload-zone');
const fileInput  = document.getElementById('file-input');

uploadZone.addEventListener('click', () => fileInput.click());

uploadZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadZone.classList.add('drag-over');
});
['dragleave', 'dragend'].forEach(ev =>
  uploadZone.addEventListener(ev, () => uploadZone.classList.remove('drag-over'))
);
uploadZone.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadZone.classList.remove('drag-over');
  const files = e.dataTransfer.files;
  if (files.length) handleFiles(files);
});
fileInput.addEventListener('change', () => handleFiles(fileInput.files));

function handleFiles(files) {
  const file = files[0];
  if (!file) return;
  const uploadTitle = uploadZone.querySelector('.upload-title');
  const uploadSub   = uploadZone.querySelector('.upload-sub');
  uploadTitle.textContent = `UPLOADING: ${file.name.toUpperCase()}`;
  uploadSub.textContent   = `${(file.size / 1024 / 1024).toFixed(1)} MB`;
  // Simulate upload reset after 2.5s
  setTimeout(() => {
    uploadTitle.textContent = 'DROP YOUR VIDEO HERE OR CLICK TO UPLOAD';
    uploadSub.textContent   = 'SUPPORTED FORMATS: MP4, MOV, WEBM (MAX 2GB)';
  }, 2500);
}

// ── Sidebar Nav active state ──
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
  });
});

// ── Search shortcut ──
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('search-input').focus();
    document.getElementById('search-input').select();
  }
});

// ── Video card play button pulse ──
document.querySelectorAll('.play-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.style.background = 'rgba(245,230,66,0.8)';
    btn.style.borderColor = '#000';
    btn.querySelector('svg').style.fill = '#000';
    setTimeout(() => {
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.querySelector('svg').style.fill = '';
    }, 600);
  });
});

// ── Leaderboard row hover bounce ──
document.querySelectorAll('.lb-row').forEach(row => {
  row.addEventListener('click', () => {
    row.style.transition = 'transform 0.08s';
    row.style.transform = 'translate(2px, 2px)';
    setTimeout(() => { row.style.transform = ''; }, 150);
  });
});

// ── Upgrade button ──
document.getElementById('btn-upgrade').addEventListener('click', () => {
  const btn = document.getElementById('btn-upgrade');
  btn.textContent = '✓ UPGRADED!';
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.textContent = 'UPGRADE';
    btn.style.background = '';
  }, 1800);
});

// ── Start Learning button ──
document.getElementById('btn-start-learning').addEventListener('click', () => {
  const btn = document.getElementById('btn-start-learning');
  btn.textContent = 'LOADING...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'START LEARNING';
    btn.disabled = false;
  }, 1500);
});

console.log('%cKalakar Dashboard loaded ✦', 'color:#F5E642;font-weight:bold;font-size:14px;');
