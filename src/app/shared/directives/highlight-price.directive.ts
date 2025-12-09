import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightPrice]'
})
export class HighlightPriceDirective {
  // @Input() appHighlightPrice = 0;

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight( color: string | null) {
    this.element.nativeElement.style.backgroundColor = color;
  }

  // ngOnInit() {
  //   if (this.appHighlightPrice > 1) {
  //     this.element.nativeElement.style.backgroundColor = 'yellow';
  //   }
  // }

}
