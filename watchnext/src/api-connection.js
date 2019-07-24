const base = 'http://localhost:3001'
const api = {
    categories: base + '/category/',
    movies: base +'/movies/',
    movie: base + '/movies/',
    catMovies: base + '/movies?category_like=',
    singUp: base + '/users',
    addMovie: base + '/movies',
    delMovie: base + '/movies/',
    lastMovie: base + '/movies/2'
}

// const base = 'http://192.168.151.105:1234'
// const api = { 
//     categories: base + '/category/',
//     movies: base + '/movies/',
//     catMovies: base + '/movies/?category_like=',
//     singUp: base + '/signup/',
//     addMovie: base + '/movies/add',
//     delMovie: base + '/movies/',
//     lastMovie: base + '/movies/2',
//     singUp: base + '/signup/',
//     logIn: base + '/login/',
//     resetPass: base + '/reset/'
// }

export default api