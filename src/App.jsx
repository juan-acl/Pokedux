import { Col, Spin } from 'antd';
import React, { startTransition, useEffect } from 'react';
import { PokemonList } from './components/PokemonList';
import { Searcher } from './components/Searcher';
import poke from './assets/poke.webp';
//import { connect } from 'react-redux';
//import { getPokemons, getPokemonsWithDetails, setLoading } from './action';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getPokemonsApi, getPokemonsImageApi }  from './api';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import { setLoading } from './slices/uiSlice';

function App () {
  const pokemons = useSelector(state => state.data.searchedPokemon, shallowEqual);
  const search = useSelector(state => state.data.searchedPokemo, shallowEqual);
  const loading = useSelector(state => state.ui.loading);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchPokemonsWithDetails())
      //dispatch(setLoading(false))
  }, [])

  return (
  <>
      <div className='app' >
        <Col span={5} offset={10} >
          <img src={poke} alt='poke' style={{width:400, height:200}} />
        </Col>
        <Col span={8} offset={8} >
        <Searcher search={search} />
        </Col>
        {loading ? (
        <Col span={12} offset={12}>
        <Spin spinning size='large' />
        </Col>) : (
        <PokemonList pokemons={pokemons} />)
        }
      </div>
  </>
  )
}

//const mapStateToProps = state => ({
//  pokemons: state.pokemons
//}); 
  
//const mapDispatchToProps = dispatch => ({
//  setPokemons: (value) => dispatch(getPokemos(value)),
//})

//export default connect(mapStateToProps, mapDispatchToProps)(App);

export { App };
