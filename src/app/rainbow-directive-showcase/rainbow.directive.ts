import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  private colors: string[] = [
    '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'
  ];

  constructor(private el: ElementRef) { }

  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;

  @HostListener('keyup') onKeyup() {
    this.changeColor();
  }

  private changeColor() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.color = this.colors[randomIndex];
    this.borderColor = this.colors[randomIndex];
  }
}
