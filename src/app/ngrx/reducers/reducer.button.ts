import { createReducer, on } from '@ngrx/store';
import { getName, nameLoaded } from '../actions/action.button';

export const initialState = 'Obtener Nombre';

// tslint:disable-next-line: variable-name
const _buttonReducer = createReducer(
  initialState,
  on(getName, (state: any) => 'hello world'),
  on(nameLoaded, (state: any, payload: any) => payload.response)
);

export function buttonReducer(state: any, action: any): any {
  return _buttonReducer(state, action);
}
