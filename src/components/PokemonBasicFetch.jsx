/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const PokemonBasicFetch = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState(null); /* true for test */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        if (!response.ok) {
          throw new Error("Fail...");
        }
        const data = await response.json();
        setPokemonData(data.results);
        console.log(pokemonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  if (error) {
    return <h1>Something went wrong!{error}</h1>;
  }

  if (loading) {
    return <h1>Loading in progress please wait~~</h1>;
  }

  return (
    <div>
      <h1>Poké list</h1>
      <ul>
        {pokemonData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

/* const PokemonBasicFetch = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // fetch data from api


        // handle data

    // invoke function

  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="font-bold">Pokémon List</h1>
      <ul>
        {pokemonData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}; */

export default PokemonBasicFetch;
