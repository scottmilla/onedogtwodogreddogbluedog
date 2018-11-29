import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsurveyComponent } from './dogsurvey.component';

describe('DogsurveyComponent', () => {
  let component: DogsurveyComponent;
  let fixture: ComponentFixture<DogsurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
