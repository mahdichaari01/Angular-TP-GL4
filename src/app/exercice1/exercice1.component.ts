import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, FormsModule} from "@angular/forms";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-exercise1',
  template: `
    <p [ngStyle]="{
      'color': form.value.color,
      'font-size.px': form.value.fontSize,
      'font-family': form.value.font
    }">This is a Very good text!!</p>
    <div>
      <input name="color" type="color" [(ngModel)]="form.value.color">
      <input type="number" name="font-size" [(ngModel)]="form.value.fontSize" />
      <select name="font" [(ngModel)]="form.value.font">
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <!-- Add more font options as needed -->
      </select>
    </div>
  `,
  styleUrls: ['./exercice1.component.css'],
  imports: [ReactiveFormsModule, NgStyle, FormsModule],
  standalone:true
})
export class Exercice1Component implements OnInit {
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      color: new FormControl('color'),
      fontSize: new FormControl(30),
      font: new FormControl('Arial')
    });
  }
}
