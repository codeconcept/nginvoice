import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateEstimatesComponentComponent } from './private-estimates-component.component';

describe('PrivateEstimatesComponentComponent', () => {
  let component: PrivateEstimatesComponentComponent;
  let fixture: ComponentFixture<PrivateEstimatesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateEstimatesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateEstimatesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
