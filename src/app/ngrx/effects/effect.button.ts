import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getName, nameLoaded } from '../actions/action.button';
import { map, mergeMap } from 'rxjs/operators';
import { ButtonService } from '../../services/button.service';

@Injectable()
export class ButtonsEffects {
  loadName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getName),
      mergeMap(
        () =>
          this.buttonService.getTime().pipe(
            map((r: any) => ({ type: nameLoaded.type, response: r.time })) //map
          ) //pipe
      ) // merge
    )
  );

  constructor(
    private actions$: Actions,
    private buttonService: ButtonService
  ) {}
}
