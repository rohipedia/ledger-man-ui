import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBannersComponent } from './landing-banners.component';

describe('LandingBannersComponent', () => {
  let component: LandingBannersComponent;
  let fixture: ComponentFixture<LandingBannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingBannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
