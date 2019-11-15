import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {eventLog } from './event-log';

describe('GameBoardComponent', () => {
  let component: eventLog;
  let fixture: ComponentFixture<eventLog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ eventLog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(eventLog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
