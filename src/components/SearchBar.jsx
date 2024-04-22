import { useState } from "react"

function SearchAndFilter({repos}) {
  const [input, setInput] = useState('');
  const [filteredRepos, setFilteredRepos] = useState([]);

  const handleSearchFilter = (e) => {
    const input = e.target.value;
    setInput(input);

    const filtered = repos.filter((repo) => {
      return repo.full_name.toLowerCase().includes(input.toLowerCase());
    })

    setFilteredRepos(filtered);
  };

  return (
    <>
    <input className="input" 
    type="text" 
    placeholder="Search repository names" 
    value={input} 
    onChange={handleSearchFilter}/>
    </>
  )
}

export default SearchAndFilter;