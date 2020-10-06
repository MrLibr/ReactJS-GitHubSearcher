import Types from '../types/types';


export interface IGitHubState {
  user: object | null;
  users: object[] | null;
  repos: object[] | null;
  loading: boolean | null;
}

export interface IGitHubAction {
  type: Types;
  payload?: any;
}

const githubReducer = ( state: IGitHubState, { type, payload }: IGitHubAction ): IGitHubState => {
  switch ( type ) {
    case Types.SEARCH_USERS:
      return { ...state, users: payload, loading: false };
    case Types.GET_REPOS:
      return { ...state, repos: payload, loading: false };
    case Types.GET_USER:
      return { ...state, user: payload, loading: false };
    case Types.SET_LOADING:
      return { ...state, loading: true };
    case Types.CLEAR_USERS:
      return { ...state, users: [] };

    default:
      return state;
  }
};

export default githubReducer;
