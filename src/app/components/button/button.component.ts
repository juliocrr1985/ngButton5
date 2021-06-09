import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent {
  title = 'ngrxbutton';

  getName = createAction('[Button Component] GetName');
  nameLoaded: any = createAction(
    '[Button Component] NameLoaded',
    props<{ response: string }>()
  );

  constructor(private store: Store<{ button: string }>) {
    this.name$ = store.select('button');
  }
  name$: Observable<string>;

  getNames(): void {
    this.store.dispatch(this.getName());
  }
}
