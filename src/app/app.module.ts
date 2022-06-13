import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {GenerationsComponent} from "./composants/generations/generations.component";
import {PokemonsComponent} from "./composants/pokemons/pokemons.component";
import {HttpClientModule} from "@angular/common/http";
import { SelectorComponent } from './composants/selector/selector.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    SelectorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
