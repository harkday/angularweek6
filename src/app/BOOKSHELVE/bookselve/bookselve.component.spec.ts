import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookselveComponent } from './bookselve.component';

describe('BookselveComponent', () => {
  let component: BookselveComponent;
  let fixture: ComponentFixture<BookselveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookselveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookselveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
