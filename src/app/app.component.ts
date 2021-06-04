import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getName } from './ngrx/actions/action.button'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'ngrxbutton';

  constructor(private store: Store<{ button: string }>) {
    this.name$ = store.select("button");
  }
  name$: Observable<string>;
  ngOnInit(): void {

  }

  getName() {
    this.store.dispatch(getName());
  }

}
