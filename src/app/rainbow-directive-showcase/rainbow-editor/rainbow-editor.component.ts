import { Component } from '@angular/core';
import {RainbowDirective} from "../rainbow.directive";

@Component({
  selector: 'app-rainbow-editor',
  template:`
  <input type="text" appRainbow/>`,
  styleUrls: ['./rainbow-editor.component.css'],
})
export class RainbowEditorComponent {

}
