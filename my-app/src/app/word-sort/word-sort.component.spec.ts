import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSortComponent } from './word-sort.component';

describe('WordSortComponent', () => {
  let component: WordSortComponent;
  let fixture: ComponentFixture<WordSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
