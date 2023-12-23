import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string
  constructor(public elementRef: ElementRef) {
    this.highlightColor = ''
  }

  @HostListener('mouseover') method1() {
    // this.changeColor('black', 'green')
    this.changeColor('black', this.highlightColor || 'green')
  }
  @HostListener('mouseleave') method2() {
    this.changeColor('black', 'white')
  }

  public changeColor(color: string, bgColor: string) {
    this.elementRef.nativeElement.style.color = color
    this.elementRef.nativeElement.style.backgroundColor = bgColor
  }

}
