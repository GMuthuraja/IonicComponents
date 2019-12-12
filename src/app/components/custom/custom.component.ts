import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})

export class CustomComponent implements OnInit {

  @Input() public itemname: string;

  constructor() { }

  ngOnInit() {
    console.log(this.itemname);
  }

  myProducts(id) {
    console.log(id);
  }

}
