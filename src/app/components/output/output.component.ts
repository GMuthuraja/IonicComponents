import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})

export class OutputComponent implements OnInit {

  @Output() public assign = new EventEmitter();
  @Input() public itemname: string;

  constructor() { }

  ngOnInit() {
    console.log(this.itemname);
  }

  assignProducts() {
    this.assign.emit('Emit from Output Component');
  }

}
