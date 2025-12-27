import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newproject } from './newproject';

describe('Newproject', () => {
  let component: Newproject;
  let fixture: ComponentFixture<Newproject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newproject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newproject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
