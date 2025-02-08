"use client";
import { APIPokemon } from "@/api/APIPokemon";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const pokemonData = await APIPokemon.getAllPokemonCards();
      setData(pokemonData);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    setVisibleData(data.slice(startIndex, endIndex));
  }, [data, page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      {visibleData.length > 0 ? (
        visibleData.map((pokemon, index) => (
          <div key={index}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
          </div>
        ))
      ) : (
        <p>Carregando Pokémons...</p>
      )}
      {visibleData.length < data.length && (
        <>
          <button
            onClick={previousPage}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Anterior
          </button>
          <button
            onClick={nextPage}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Proximo
          </button>
        </>
      )}
    </div>
  );
}
