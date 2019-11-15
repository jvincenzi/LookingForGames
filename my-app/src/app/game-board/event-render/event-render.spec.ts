import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { eventRender } from './event-render';

describe('GameBoardComponent', () => {
  let component: eventRender;
  let fixture: ComponentFixture<eventRender>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ eventRender ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(eventRender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
