import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CustomComponent } from '../components/custom/custom.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage implements OnInit {

  myItems = "Assigned via @Input";

  @ViewChild(CustomComponent, {static: true}) child: CustomComponent;

  constructor() { }

  ngOnInit(){
    this.child.myProducts(12);
  }

  valueFromOutput(data){
    console.log(data);
  }
}
