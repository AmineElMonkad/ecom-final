import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreBarComponent } from './filtre-bar.component';

describe('FiltreBarComponent', () => {
  let component: FiltreBarComponent;
  let fixture: ComponentFixture<FiltreBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltreBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
