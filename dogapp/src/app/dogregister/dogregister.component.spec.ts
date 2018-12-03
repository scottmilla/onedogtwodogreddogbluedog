import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogregisterComponent } from './dogregister.component';

describe('DogregisterComponent', () => {
  let component: DogregisterComponent;
  let fixture: ComponentFixture<DogregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
