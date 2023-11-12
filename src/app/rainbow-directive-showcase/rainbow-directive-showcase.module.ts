import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RainbowEditorComponent } from './rainbow-editor/rainbow-editor.component';
import { RainbowDirective } from './rainbow.directive';



@NgModule({
  declarations: [
    RainbowEditorComponent,
    RainbowDirective
  ],
  exports:[
    RainbowEditorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RainbowDirectiveShowcaseModule { }
