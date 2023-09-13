import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookReactiveComponent } from './add-book-reactive.component';

describe('AddBookReactiveComponent', () => {
  let component: AddBookReactiveComponent;
  let fixture: ComponentFixture<AddBookReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBookReactiveComponent]
    });
    fixture = TestBed.createComponent(AddBookReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
