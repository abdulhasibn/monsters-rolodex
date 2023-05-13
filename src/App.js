import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/cardList.component";
import SearchBar from "./components/search_bar/searchBar.component";
const App = () => {
  const [monsters, setMonsters] = useState();
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setMonsters(res);
      });
  }, []);
  useEffect(() => {
    const newFilteredMonsters = monsters?.filter((monster) => {
      return monster.name.toLocaleLowerCase()?.includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="title">Monster Rolodex</h1>
      <SearchBar
        onSearchChange={onSearchChange}
        className="monsters-search-box"
        placeHolder="Search Monster"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
