import React from 'react';
import { PokemonCard } from './PokemonCard';
import './PokemonList.css'


function PokemonList ({pokemons}) {
  return (
  <>
      <div className='pokemonList'>
        {pokemons.map((pokemon) => (
          <div key={pokemon.name} >
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}  
      </div>
  </>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(20).fill('')
}

export { PokemonList };
