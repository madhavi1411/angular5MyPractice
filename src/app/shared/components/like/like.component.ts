import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, Injector } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],

  //as service is provide in the component, to the life time of service is based on compoment life time.
  // this instance of DataService is not shared with any other components
  providers: [ // where you provide all the services
    //all the services
    // DataService // -- commented to show the how to access it in shared way
  ],
})
export class LikeComponent implements OnInit, OnDestroy {


  //two way binding
  //input name, inputName + Change

  @Input()
  likes : number;

  //input name + Change
  @Output()
  likesChange : EventEmitter<number> = new EventEmitter();



  // constructor(private dataService: DataService) {  // this like constructor requires the DataService, so it first creates DataService for this component and then creates this like component
  //   console.log("Like component created");
  // }

  //Via the Injector way : Injector example  -- in here also DataService is scoped only for the Like component
  dataService : DataService;
  constructor(private injector: Injector) {
    console.log("Like component created via a injector");
    this.dataService = this.injector.get(DataService);
  }

  ngOnInit() {
  }

  up() {
    this.likesChange.emit(this.likes + 1);
  }

  down() {
    this.likesChange.emit(this.likes - 1);
  }


  ngOnDestroy(): void {
    console.log("Like component Destroyed");
  }

}
