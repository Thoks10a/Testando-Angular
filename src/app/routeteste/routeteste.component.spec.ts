import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutetesteComponent } from './routeteste.component';

describe('RoutetesteComponent', () => {
  let component: RoutetesteComponent;
  let fixture: ComponentFixture<RoutetesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutetesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutetesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
