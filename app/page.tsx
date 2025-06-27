'use client'

import React, { useState } from 'react'
import SearchBar from '@/components/ui/SearchBar'
import MovieCard from '@/components/ui/MovieCard'
import { fetchMovies } from '@/lib/fetchMovie'
import { toast } from 'sonner'

type Movie = {
  Title: string
  Year: string
  Poster: string
  imdbID: string
}

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [movies, setMovies] = useState<Movie[]>([])

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      toast.error('Enter a movie name')
      return
    }

    toast('Searching...')
    try {
      const data = await fetchMovies(searchTerm)
      console.log('OMDB response:', data)

      if (data?.Search) {
        setMovies(data.Search as Movie[])
      } else {
        setMovies([])
        toast.error(data?.Error || 'No movies found.')
      }
    } catch (err) {
      console.error(err)
      toast.error('Something went wrong')
    }
  }

  return (
    <main className="p-4">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </main>
  )
}

export default Home


