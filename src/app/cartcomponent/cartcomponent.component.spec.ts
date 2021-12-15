import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CARTCOMPONENTComponent } from './cartcomponent.component';

describe('CARTCOMPONENTComponent', () => {
  let component: CARTCOMPONENTComponent;
  let fixture: ComponentFixture<CARTCOMPONENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CARTCOMPONENTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CARTCOMPONENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
