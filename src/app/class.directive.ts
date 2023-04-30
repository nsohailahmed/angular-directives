import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element:ElementRef) { 
    console.log("Class directive used");
    // this.element.nativeElement.style.backgroundColor = "Red"; // to  access html element and change something in it
  }

  @Input("appClass") set classNames(classObj:any){
    // for in loop to iterate keys of an object
    for(let key in classObj){
      if(classObj[key]){
        this.element.nativeElement.classList.add(key);
      }else{
        this.element.nativeElement.classList.remove(key);
      }
    }
    
  }

}
