import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionspageComponent } from './actionspage.component';

describe('ActionspageComponent', () => {
  let component: ActionspageComponent;
  let fixture: ComponentFixture<ActionspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
