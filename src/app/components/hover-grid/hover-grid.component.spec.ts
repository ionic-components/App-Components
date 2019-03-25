import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverGridComponent } from './hover-grid.component';

describe('HoverGridComponent', () => {
  let component: HoverGridComponent;
  let fixture: ComponentFixture<HoverGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverGridComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
