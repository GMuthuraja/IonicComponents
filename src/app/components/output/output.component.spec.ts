import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputComponent } from './output.component';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
