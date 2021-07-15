import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWomanCardComponent } from './single-woman-card.component';

describe('SingleWomanCardComponent', () => {
  let component: SingleWomanCardComponent;
  let fixture: ComponentFixture<SingleWomanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleWomanCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleWomanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
