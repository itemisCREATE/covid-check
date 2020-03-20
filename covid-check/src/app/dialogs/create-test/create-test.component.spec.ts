import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestComponent } from './create-test.component';

describe('CreateTestComponent', () => {
  let component: CreateTestComponent;
  let fixture: ComponentFixture<CreateTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
