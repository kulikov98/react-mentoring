import { useState } from 'react';
import Counter from './components/counter/Counter';
import SearchForm from './components/search-form/SearchForm';
import GenreSelect from './components/genre-select/GenreSelect';

function App() {
  const [selectedGenre, setSelectedGenre] = useState("crime");
  const genres = [
    { name: "documentary", id: "1" },
    { name: "history", id: "2" },
    { name: "comedy", id: "3" },
    { name: "horror", id: "4" },
    { name: "crime", id: "5" },
  ];

  return (
    <>
      <Counter initialCount="10" />
      <br />
      <SearchForm onSearch={(term) => alert(`search for ${term}`)} query="" />
      <br />
      <GenreSelect
        genres={genres}
        selected={selectedGenre}
        onSelect={(name) => setSelectedGenre(name)}
      />
    </>
  );
}

export default App;
