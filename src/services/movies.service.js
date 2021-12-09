// API calls listed here

export const getMovie = (id) => fetch(`/movie/${id}`);

export const deleteMovie = (id) => fetch(`/movie/${id}`, { method: 'DELETE' });
