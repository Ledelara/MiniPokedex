import { useState } from "react";

const usePokemonSearch = () => {

    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchPokemonData = async() => {
        if(pokemonName.trim() === '') {
            setError('Favor inserir o nome do Pokémon');
            return;
        }

        try {
            setIsLoading(true);
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            const data = await res.json();
            setError('');
            setPokemonData(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching Pokemon data:', error);
            setIsLoading(false);
            setError('Ocorreu um erro ao buscar os dados do Pokémon. Por favor, tente novamente.')
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetchPokemonData();
        setPokemonName('');
    };

    return {
        pokemonName,
        setPokemonName,
        pokemonData,
        isLoading,
        error,
        handleSubmit,
    }
};

export default usePokemonSearch;