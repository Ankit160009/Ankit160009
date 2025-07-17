// Toggle dark mode
const toggleBtn = document.querySelector('.toggle-btn');
const body = document.body;
const icon = toggleBtn.querySelector('i');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  icon.classList.remove('fa-moon');
  icon.classList.add('fa-sun');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Switch icons
  if (body.classList.contains('dark')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
  }
});
