window.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tabs li a');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      tabContents.forEach(function(content) {
        content.classList.remove('active');
      });

      tabs.forEach(function(tab) {
        tab.classList.remove('active');
      });

      target.classList.add('active');
      this.classList.add('active');
    });
  });
});
