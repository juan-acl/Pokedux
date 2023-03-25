import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';

function PokemonCard ({pokemon}) {
  const typeString = pokemon.types.map((item) => item.type.name).join(', ')

  return (
  <>
  <Card
        style={{width: 250, borderColor: '#000'}}
        cover={<img src={pokemon.sprites.front_default} alt='pikapika'/>}
        title={pokemon.name}
        extra={ <StarOutlined /> }
      >
      <Meta description={typeString} />
    </Card>
  </>
  )
}

export { PokemonCard };
