document.addEventListener('DOMContentLoaded', () => {
    const moviesList = document.getElementById('moviesList');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];

    if (movies.length === 0) {
        moviesList.innerHTML = '<p>Nenhum filme cadastrado.</p>';
    } else {
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');

            movieItem.innerHTML = `
                <h3>${movie.nameBrazil} (${movie.nameOriginal})</h3>
                <p><strong>Diretor:</strong> ${movie.director}</p>
                <p><strong>Data de Estreia:</strong> ${movie.releaseDate}</p>
                <p><strong>Classificação Indicativa:</strong> ${movie.rating}</p>
                <p><strong>Gênero:</strong> ${movie.genre}</p>
                <p><strong>Idiomas de Áudio:</strong> ${movie.audioLanguages.join(', ')}</p>
            `;

            moviesList.appendChild(movieItem);
        });
    }
});


