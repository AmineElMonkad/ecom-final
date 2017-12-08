import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdouitDetailsComponent } from './prdouit-details.component';

describe('PrdouitDetailsComponent', () => {
  let component: PrdouitDetailsComponent;
  let fixture: ComponentFixture<PrdouitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrdouitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrdouitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
