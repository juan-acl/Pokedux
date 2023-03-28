import { Col, Spin } from 'antd';
import React, { startTransition, useEffect } from 'react';
import { PokemonList } from './components/PokemonList';
import { Searcher } from './components/Searcher';
import poke from './assets/poke.webp';
//import { connect } from 'react-redux';
import { getPokemons, getPokemonsWithDetails, setLoading } from './action';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getPokemonsApi, getPokemonsImageApi }  from './api';

function App () {
  const pokemons = useSelector(state => state.getIn(['data','pokemons'], shallowEqual)).toJS();
  const loading = useSelector(state => state.getIn(['ui', 'loading']));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApi = async () => {
      dispatch(setLoading(true));
      const responseGet = await getPokemonsApi();
      dispatch(getPokemonsWithDetails(responseGet))
      dispatch(setLoading(false))
    }

    fetchApi();
  }, [])

  return (
  <>
      <div className='app' >
        <Col span={5} offset={10} >
          <img src={poke} alt='poke' style={{width:400, height:200}} />
        </Col>
        <Col span={8} offset={8} >
        <Searcher />
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
