const base = 'http://localhost:3001'
const api = {
    categories: base + '/category/',
    movies: base +'/movies/',
    movie: base + '/movies/',
    catMovies: base + '/movies?category_like=',
    singUp: base + '/users',
    addMovie: base + '/movies',
    delMovie: base + '/movies/'
}

// const base = 'http://192.168.151.105:1234'
// const api = { 
//     categories: '/category/',
//     movies: '/movies/',
//     catMovies: '/movies/?category_like=',
//     singUp: '/signup/',
//     addMovie: '/movies/add',
//     delMovie: '/movies/',
//     singUp: '/signup/',
//     logIn: '/login/',
//     resetPass: '/reset/'
// }

export default api