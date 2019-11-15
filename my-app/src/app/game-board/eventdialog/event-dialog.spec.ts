import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { eventDialog } from './event-dialog';

describe('GameBoardComponent', () => {
  let component: eventDialog;
  let fixture: ComponentFixture<eventDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ eventDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(eventDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
