import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacerComponent } from './racer.component';

describe('RacerComponent', () => {
  let component: RacerComponent;
  let fixture: ComponentFixture<RacerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
