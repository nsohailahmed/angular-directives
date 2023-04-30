import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  

  constructor(private element:ElementRef) { 
    console.log("Class directive used");
    // this.element.nativeElement.style.backgroundColor = "Red"; // to  access html element and change something in it
  }

  @Input() set backgroundColor(color:string){
    this.element.nativeElement.style.backgroundColor = color;
  }

}
