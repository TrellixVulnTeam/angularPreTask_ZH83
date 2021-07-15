import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWomanFormComponent } from './add-woman-form.component';

describe('AddWomanFormComponent', () => {
  let component: AddWomanFormComponent;
  let fixture: ComponentFixture<AddWomanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWomanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWomanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
