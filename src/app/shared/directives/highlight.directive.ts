import { Directive, OnInit, OnDestroy,
  Input, Output, EventEmitter, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]', //[] is mandatory as this is used as an attribute .. no css and no view
  exportAs : 'appHighlightDirective'
})
export class HighlightDirective implements OnInit, OnDestroy {


  @Input()
  color : string;


  ngOnInit(): void {
    console.log("Directive Init")
    //default if color is not passed by host
    this.color  = this.color || 'lightgreen';
    console.log("Color: ", this.color);
  }


  // <p appHighlight ==> p is a hostElement
  // Renderer is the highlevel reference for the DOM element  -- wraper for the DOM elements

  constructor(private hostElement: ElementRef, private renderer : Renderer2) { 
    console.log('highlight directive created');
  }
  
  //if you want to listen to any directive events
  @HostListener("click")
  onclick() {
      console.log("directive click event");
  }

  @HostListener("mouseenter")
  onEnter() {
      console.log("directive mouse enter event");
      this.renderer.setStyle(this.hostElement.nativeElement, "background" , this.color);
      this.renderer.removeStyle(this.hostElement.nativeElement,"opacity");
      this.renderer.removeStyle(this.hostElement.nativeElement,"transition");
  }

  @HostListener("mouseleave")
  onLeave() {
      console.log("directive mouse leave event");
      this.renderer.removeStyle(this.hostElement.nativeElement, "background");
      this.renderer.setStyle(this.hostElement.nativeElement,"opacity",0);
      this.renderer.setStyle(this.hostElement.nativeElement,"transition","opacity 2s");
  }

  setColor(color: string) {
    this.color = color;
    console.log("Directive method");
  }

  ngOnDestroy(): void {
    console.log("Directive Destroy")
  }

}
