import { Input, Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimate]'
})
export class AnimateDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    console.log('uvnitr');
    this.renderer.addClass(this.el.nativeElement, 'animated');
    this.renderer.addClass(this.el.nativeElement, 'tada');
    this.renderer.removeClass(this.el.nativeElement, 'zoomIn');
  }
  @HostListener('mouseleave') onMouseLeave() {
    console.log('ven');
    this.renderer.removeClass(this.el.nativeElement, 'tada');
  }
  @HostListener('click') onMouseClick() {
    console.log('klik');
    this.renderer.removeClass(this.el.nativeElement, 'tada');
    this.renderer.addClass(this.el.nativeElement, 'animated');
    this.renderer.addClass(this.el.nativeElement, 'flip');
    setTimeout(() => {
      this.renderer.removeClass(this.el.nativeElement, 'flip');
    }, 800);
  }

}
