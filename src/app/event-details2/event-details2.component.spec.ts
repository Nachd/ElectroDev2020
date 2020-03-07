import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetails2Component } from './event-details2.component';

describe('EventDetails2Component', () => {
  let component: EventDetails2Component;
  let fixture: ComponentFixture<EventDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
