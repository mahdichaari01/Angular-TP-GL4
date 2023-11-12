import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {provideRouter, RouterLink, RouterOutlet} from "@angular/router";
import {routes} from "./app.routes";
import { Exercice1Component } from './exercice1/exercice1.component';
import {RainbowDirectiveShowcaseModule} from "./rainbow-directive-showcase/rainbow-directive-showcase.module";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    Exercice1Component,
    RouterOutlet,
    RouterLink,
    RainbowDirectiveShowcaseModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],

})
export class AppModule { }
