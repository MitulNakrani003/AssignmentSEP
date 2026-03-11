import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorChange]',
  standalone: false
})
export class ColorChangeDirective {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {
  }

  originalText: string = '';

  @HostListener('mouseenter')
  onMouseEnter(){
    if (this.el.nativeElement.innerText.length > 30){
      this.originalText = this.el.nativeElement.innerText;
      this.el.nativeElement.innerText = this.el.nativeElement.innerText.slice(0,29)+'...'
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.innerText = this.originalText;
    this.originalText = '';
  }

}
