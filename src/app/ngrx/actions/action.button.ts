import { createAction, props } from '@ngrx/store';

export const getName = createAction('[Button Component] GetName');
export const nameLoaded = createAction('[Button Component] NameLoaded', props<{ response: string }>())
