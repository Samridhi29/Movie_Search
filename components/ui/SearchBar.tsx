'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type Props = {
  searchTerm: string
  setSearchTerm: (value: string) => void
  handleSearch: () => void
}

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }: Props) => {
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="flex w-full max-w-xl gap-2">
      <Input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={onEnter}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  )
}

export default SearchBar

