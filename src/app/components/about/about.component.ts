import { Component, OnInit } from '@angular/core';

interface Member {
  name : string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

//  members: {name: string} [] = [ {name: 'V S K Murari'}, {name : 'Satyaa'}];  OR use the interface as below
  members: Member[] = [ {name: 'V S K Murari'}, {name : 'Satyaa'}];
  show: boolean = true;
  highlight: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addMember() {
    this.members.push({name: 'Member' + Math.random()});
  }

}
