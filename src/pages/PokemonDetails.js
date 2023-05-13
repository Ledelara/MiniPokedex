import React from 'react'
import './PokemonDetails.css';

// Hooks
import usePokemonSearch from '../hooks/usePokemonSearch';

const PokemonDetails = () => {

    const {
        pokemonName,
        setPokemonName,
        pokemonData,
        isLoading,
        error,
        handleSubmit
    } = usePokemonSearch();

  return (
    <div className='pokemon-details'>
        <form onSubmit={handleSubmit}>
            <input type='text' value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} placeholder='Digite o nome do Pokémon'/>
            <button type='submit'>Pesquisar</button>
        </form>
        {error && <p>{error}</p>}
        {isLoading ? (
            <p>Carregando. Por favor aguarde.</p>
        ) : (
            pokemonData && (
                <>
                    <h2>{pokemonData.name}</h2>
                    <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
                    <p className='type'>Type: {pokemonData.types[0].type.name}</p>
                    <p className='type'>Height: {pokemonData.height}</p>
                    <p className='type'>Weight: {pokemonData.weight}</p> 
                    <div className='abilities'>
                        <h3>Abilities</h3>
                        <ul>
                            {pokemonData.abilities.map((ability) => (
                                <li key={ability.ability.name}><p className='ability-text'>{ability.ability.name}</p></li>
                            ))}
                        </ul>
                    </div>
                </>
            )
        )}
    </div>
  )
}

export default PokemonDetails