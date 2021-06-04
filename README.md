# Ngrxbutton

##Here are shown the steps to create this button that fetches it's innerText from backend and manage the state of application.

##-First: We need to import StoreModule from '@ngrx/store'.
##-Second_ We need to import EffectsModule from '@ngrx/effects'.
##-Third: We need to import the HttpClientModule to be able to perform http calls.
##-Fourth We have to create a Service to manages the HTTP calls.
##-Fifth: store service must be injected in every component. As we are working at the root for sake of simplicity, we inject Store module in the app.component.ts 
##-We create a method that dispatch a function getName.
##-In the action.buttons we need to import 'createAction' and 'props' from '@ngrx/store'.
##-we create to createAction methods. and for 'getName' and other for 'nameLoaded'
##-We need to create a reducer.button.ts file, and import 'createReducer' and 'on' from '@ngrx/store'
##-we have to import 'getName' and 'nameLoaded' from actions.
##-We have to set the initialState, then make use of the 'createReducer' method and pass the initial state and listen to the 'getName' and 'nameLoaded', then export that functions.
##-We need to create a 'effect.button.ts' and import: 'Injectable0', 'Actions', createEffects', 'ofType', 'getName', 'nameLoaded', then we need from '@angular/core', '@ngrx/effects' and 'action.button'. then we have to import 'map', mergeMap from 'rxjs/operators', and buttonService from button.service.

##-After all this steps, we can start developing the code.



