import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})

export class OutputComponent {

  @Output() public assign = new EventEmitter();

  constructor() { }

  assignProducts(){
    this.assign.emit('Emit from Output Component');
  }

}
