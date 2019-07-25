import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionnewsComponent } from './sectionnews.component';

describe('SectionnewsComponent', () => {
  let component: SectionnewsComponent;
  let fixture: ComponentFixture<SectionnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
