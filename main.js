const global = {
  currentPage: window.location.pathname,
};

// Fetch data from

// Highlight active link
function highlightActivateLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

// Init App

function init() {
  switch (global.currentPage) {
    case '/':
    case 'index.html':
      console.log('Home');
      break;
    case '/src/html/shows.html':
      console.log('Shows');
      break;
    case '/src/html/tv-details.html':
      console.log('TV Details');
      break;
    case '/src/html/movie-details.html':
      console.log('Movie Details');
      break;
    case '/src/html/search.html':
      console.log('Search');
      break;
  }

  highlightActivateLink();
}

document.addEventListener('DOMContentLoaded', init);
