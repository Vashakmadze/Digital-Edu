import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunfactsComponent } from './funfacts.component';

describe('FunfactsComponent', () => {
  let component: FunfactsComponent;
  let fixture: ComponentFixture<FunfactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunfactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunfactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
