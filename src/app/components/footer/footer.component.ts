import { Component, OnInit, Input, Output, EventEmitter, 
          ViewChild, 
} from '@angular/core';
import { HighlightDirective } from '../../shared/directives/highlight.directive';
// import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //input -- parent to child communication
  @Input()
  year : number;

  @Input("x-title")
  // @Input()
  appTitle: string;

  @ViewChild('myfooterDiv')  //ref to highlight directive
  directiveRef : HighlightDirective;


  // output, event binding () -- child to parent communication via events
  @Output()
  contactEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("year ", this.year, typeof this.year);
    this.directiveRef.setColor('red');
  }

  contact() {
    this.contactEvent.emit("Contact us");
  }

}
