import { createReducer, on } from '@ngrx/store';
import { getName, nameLoaded } from '../actions/action.button';

export const initialState = 'Obtener Nombre';

const _buttonReducer = createReducer(
    initialState,
    on(getName, (state) => 'hello world'),
    on(nameLoaded, (state, payload) => (payload.response))
);

export function buttonReducer(state, action) {
    return _buttonReducer(state, action);
}