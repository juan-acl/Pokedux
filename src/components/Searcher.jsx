import { Input } from 'antd';
import React from 'react';

function Searcher () {

  return (
  <>
      <Input.Search placeholder='Buscar...' style={{marginBottom: '5rem'}} />
  </>
  )
}

export { Searcher };
