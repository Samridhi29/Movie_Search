export async function fetchMovies(query: string) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${query}`)
  return res.json()
}

