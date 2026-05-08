import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tpes } from './tpes';

describe('Tpes', () => {
  let component: Tpes;
  let fixture: ComponentFixture<Tpes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tpes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tpes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
