import Image from 'next/image'

type Movie = {
  Title: string
  Year: string
  Poster: string
  imdbID: string
}

type Props = {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  const poster = movie.Poster !== 'N/A' ? movie.Poster : '/no-image.png'

  return (
    <div className="rounded-lg overflow-hidden border shadow bg-card">
      <Image
        src={poster}
        alt={movie.Title}
        width={300}
        height={450}
        className="w-full h-[450px] object-cover"
      />
      <div className="p-3">
        <h2 className="text-lg font-semibold line-clamp-2">{movie.Title}</h2>
        <p className="text-sm text-muted-foreground">{movie.Year}</p>
      </div>
    </div>
  )
}

export default MovieCard
