import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeme]'
})
export class ChangemeDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor='red';
    this.el.nativeElement.style.color="yellow";
    this.el.nativeElement.innerText="i am changed";
  }

  }
