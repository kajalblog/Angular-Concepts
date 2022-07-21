import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textsec2Component } from './textsec2.component';

describe('Textsec2Component', () => {
  let component: Textsec2Component;
  let fixture: ComponentFixture<Textsec2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Textsec2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Textsec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
