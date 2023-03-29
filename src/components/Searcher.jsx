import { Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchedPokemon } from '../slices/dataSlice';

function Searcher () {
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    dispatch(setSearchedPokemon(e.target.value))
  }

  return (
  <>
      <Input.Search onChange={handleChange} placeholder='Buscar...' style={{marginBottom: '5rem'}} />
  </>
  )
}

export { Searcher };
