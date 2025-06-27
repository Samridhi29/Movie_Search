'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dispatch, SetStateAction } from 'react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  handleSearch: () => void;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  handleSearch,
}: SearchBarProps) {
  return (
    <div className="w-full flex gap-2">
      <Input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1"
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}
