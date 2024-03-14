const global = {
  currentPage: window.location.pathname,
};

async function displayPopularMovies() {
  const { results } = await fetchAPIData('movie/popular');

  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
          <a href="/src/html/movie-details.html?id=${movie.id}">
           ${
             movie.poster_path
               ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}"/>`
               : `<img src="/src/images/no-image.jpg" class="card-img-top" alt="${movie.title}" />`
           }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">${movie.release_date}</small>
            </p>
          </div>
        `;
    document.querySelector('#popular-movies').appendChild(div);
  });
}

// Fetch data from TMBD API
async function fetchAPIData() {
  const response = await fetch(
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Yjk2MjhkODhlMmVmYjI0YjMwYzcyZGY0ZjkxMWMwMSIsInN1YiI6IjY1ZjIxNDBkZTlkYTY5MDE2MzVlNzNhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xYHzmum2DDmh4l6lz9qStSyqLDU2vOyRGmPhFwjH0I8',
      },
    }
  );

  const data = await response.json();

  return data;
}

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
      displayPopularMovies();
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
