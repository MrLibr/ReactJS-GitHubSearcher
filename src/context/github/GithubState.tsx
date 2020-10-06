import Axios from 'axios';
import React, { useReducer } from 'react';
import Types from '../types/types';
import { GithubContext } from './githubContext';
import githubReducer from './githubReducer';


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const withCredos = ( url: string ): string => {
  return `${ url }client_id=${ CLIENT_ID }&client_secret=${ CLIENT_SECRET }`;
};

export const GithubState: React.FC = ( { children } ): JSX.Element => {

  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  };

  const [ state, dispatch ] = useReducer( githubReducer, initialState );

  const search = async ( value: string ): Promise<void> => {
    setLoading();

    const response = await Axios.get(
      withCredos( `https://api.github.com/search/users?q=${ value }&` )
    );

    dispatch( {
      type: Types.SEARCH_USERS,
      payload: response.data.items
    } );
  };

  const getUser = async ( name: string ) => {
    setLoading();

    const response = await Axios.get(
      withCredos( `https://api.github.com/users/${ name }?` )
    );

    dispatch( {
      type: Types.GET_USER,
      payload: response.data
    } );
  };

  const getRepos = async ( name: string ) => {
    setLoading();

    const response = await Axios.get(
      withCredos( `https://api.github.com/users/${ name }/repos?per_page=5&` )
    );

    dispatch( {
      type: Types.GET_REPOS,
      payload: response.data
    } );
  };

  const clearUsers = (): void => dispatch( { type: Types.CLEAR_USERS } );
  const setLoading = (): void => dispatch( { type: Types.SET_LOADING } );
  const { user, users, repos, loading } = state;

  return (
    <GithubContext.Provider value={{
      search,
      getUser,
      getRepos,
      clearUsers,
      setLoading,
      user,
      users,
      repos,
      loading
    }}>
      {children}
    </GithubContext.Provider>
  );
};
