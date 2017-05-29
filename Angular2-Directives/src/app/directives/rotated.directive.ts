import { Directive, ElementRef, Input, HostListener, Renderer, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Directive({
  selector: '[appRotated]'
})
export class RotatedDirective implements OnInit {
    
  @Input('appRotated') rotationAngle: String;
  //anotherOne: String;

  defaultRotationAngle: String = "90";
  elementRef: ElementRef;
  constructor(element: ElementRef, private renderer: Renderer) { 

    console.log('inside directive');

    this.elementRef = element;
    
    this.renderer.setElementStyle(this.elementRef.nativeElement, "transformOrigin", "50% 50%")
    this.renderer.setElementStyle(this.elementRef.nativeElement, "backgroundColor", "cyan")
    
    var toRotate: String = this.rotationAngle || this.defaultRotationAngle;
    var arg = "rotate("+toRotate + "deg)";

    this.elementRef.nativeElement.style.transform = arg;

    console.log('directive finished');
  }

  ngOnInit(): void {
      //throw new Error('Method not implemented.');
    var toRotate: String = this.rotationAngle || this.defaultRotationAngle;
    var arg = "rotate("+toRotate + "deg)";

    this.elementRef.nativeElement.style.transform = arg;
  }

  @HostListener('mouseenter') onMouseEnter() {
    var toRotate: String = this.rotationAngle || this.defaultRotationAngle;
    var arg = "rotate("+toRotate + "deg)";

    this.elementRef.nativeElement.style.transform = arg;
    
  }
}
