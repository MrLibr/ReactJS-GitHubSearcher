import React, { useReducer } from 'react';
import Types from '../types/types';
import AlertContext from './alert.context';
import alertReducer from './alert.reducer';


const AlertState: React.FC = ( { children } ): JSX.Element => {

  const [ state, dispatch ] = useReducer( alertReducer, [] );

  const show = ( text: string, type: string = 'secondary' ) => dispatch( {
    type: Types.SHOW_ALERT,
    payload: { text, type }
  } );
  const hide = () => dispatch( { type: Types.HIDE_ALERT } );

  return (
    <AlertContext.Provider value={{
      hide,
      show,
      alert: state
    }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
