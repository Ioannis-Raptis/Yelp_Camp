import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampgroundComponent } from './create-campground.component';

describe('CreateCampgroundComponent', () => {
  let component: CreateCampgroundComponent;
  let fixture: ComponentFixture<CreateCampgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCampgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCampgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
