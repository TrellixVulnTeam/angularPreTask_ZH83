import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleActCardComponent } from './single-act-card.component';

describe('SingleActCardComponent', () => {
  let component: SingleActCardComponent;
  let fixture: ComponentFixture<SingleActCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleActCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleActCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
