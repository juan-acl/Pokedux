import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../action';
import { StartButton } from './StartButton';

function PokemonCard ({pokemon}) {
  const typeString = pokemon.types.map((item) => item.type.name).join(', ')
  const dispatch = useDispatch();
  
  const clickFavorite = () =>{
  dispatch(setFavorite({pokemonId: pokemon.id}))
  }

  return (
  <>
  <Card
        style={{width: 250, borderColor: '#000'}}
        cover={<img src={pokemon.sprites.front_default} alt='pikapika'/>}
        title={pokemon.name}
        extra={ <StartButton isFavorite={pokemon.favorite} onClick={clickFavorite}/> }
      >
      <Meta description={typeString} />
    </Card>
  </>
  )
}

export { PokemonCard };
