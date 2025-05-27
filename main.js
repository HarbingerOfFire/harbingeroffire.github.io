// Example: Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Theme';
  document.body.insertBefore(toggleButton, document.body.firstChild);

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
});
