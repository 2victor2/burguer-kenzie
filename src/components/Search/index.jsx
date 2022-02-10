import "./styles.css";
import Button from "../Button";
import { useState } from "react";

const Search = ({ userSearch, setUserSearch, callback }) => {
  return (
    <form className="search-container">
      <input
        type="text"
        name="input-search"
        id="input-search"
        placeholder="Digitar Pesquisa"
        defaultValue={userSearch}
        onKeyUp={(e) => setUserSearch(e.target.value)}
        onChange={callback}
      />
      <Button callback={callback} classname="add-button">
        Pesquisar
      </Button>
    </form>
  );
};

export default Search;
