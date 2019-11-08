import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CustomComponent } from '../components/custom/custom.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage implements OnInit {

  myItems = "Assign via @Input";

  @ViewChild(CustomComponent, {static: true}) child: CustomComponent;

  constructor() { }

  ngOnInit(){
    this.child.myProducts();
  }

  assignProduct(data){
    console.log(data);
  }
}
