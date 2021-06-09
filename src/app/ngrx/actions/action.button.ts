import { createAction, props } from '@ngrx/store';

export const getName = createAction('[Button Component] GetName');
export const nameLoaded: any = createAction(
  '[Button Component] NameLoaded',
  props<{ response: string }>()
);
