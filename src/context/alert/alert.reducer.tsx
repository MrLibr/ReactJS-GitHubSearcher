import Types from '../types/types';

export interface IAlertState {

}

export interface IAlertAction {
  type: Types;
  payload?: any;
}

const alertReducer = ( state: IAlertState, { type, payload }: IAlertAction ): IAlertState => {
  switch ( type ) {
    case Types.SHOW_ALERT:
      return [ payload ];
    case Types.HIDE_ALERT:
      return [];
    default:
      return state;
  }
};

export default alertReducer;
