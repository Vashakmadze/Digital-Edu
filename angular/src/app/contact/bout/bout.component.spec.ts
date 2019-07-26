import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutComponent } from './bout.component';

describe('BoutComponent', () => {
  let component: BoutComponent;
  let fixture: ComponentFixture<BoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
