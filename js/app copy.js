document.addEventListener("DOMContentLoaded", () => {
  /**
   * Function to fetch Pokemon data
   * Fetches Pokemon data from the API.
   * Sends a fetch web request to the Pokemon API and receives a JSON-like object with 151 Pokemon URLs.
   * Extracts the array of Pokemon objects from the response data and iterates through them.
   * Calls the getPokemon function for each individual Pokemon.
   */
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => data.results.forEach(getPokemon));
  };
});
