import {Routes} from '@angular/router';
import {Exercice1Component} from "./exercice1/exercice1.component";
import {RainbowEditorComponent} from "./rainbow-directive-showcase/rainbow-editor/rainbow-editor.component";

export const routes:Routes = [
  {path: "ex1",component:Exercice1Component},
  {
    path:"ex2",component:RainbowEditorComponent
  }
];
