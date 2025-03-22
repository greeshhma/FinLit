// Theme switcher functionality
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const rootElement = document.documentElement;
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    rootElement.setAttribute('data-theme', savedTheme);
    updateIcon(icon, savedTheme);
  
   
    themeToggle.addEventListener('click', () => {
      const currentTheme = rootElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      rootElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateIcon(icon, newTheme);
    });
  }
  
  function updateIcon(icon, theme) {
    if (theme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
  
  // Initialize theme when DOM is loaded
  document.addEventListener('DOMContentLoaded', initTheme);