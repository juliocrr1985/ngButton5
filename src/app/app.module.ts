import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { buttonReducer } from './ngrx/reducers/reducer.button';
import { EffectsModule } from '@ngrx/effects';
import { ButtonsEffects } from './ngrx/effects/effect.button';
 
import { ButtonService } from './services/button.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ button: buttonReducer }),
    EffectsModule.forRoot([ButtonsEffects]),
    AppRoutingModule],
  providers: [ButtonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
